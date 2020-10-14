/**
 * stack.js
 * http://www.imabhi.in
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2015, Codrops
 * http://www.codrops.com
 *
 * Migrated to TypeScript by Joseph Chamochumbi
 *
 */

// TODO: Remove dependency on dynamic.js
import dynamics from 'dynamics.js';

const onEndAnimation = (el: HTMLElement, callback: () => void) => {
  const onEndCallbackFn = (ev: Event) => {
    if (ev.target !== el) return;

    el.removeEventListener('animationend', onEndCallbackFn);

    if (callback && typeof callback === 'function') {
      callback();
    }
  };

  el.addEventListener('animationend', onEndCallbackFn);
};

type Animation = {
  // if true, then the settings.properties parameter will be distributed through the items in a non equal fashion
  // for instance, if we set settings.properties = {translateX:100} and we have options.visible = 4,
  // then the second item on the stack will translate 100px, the second one 75px and the third 50px
  elastic: boolean;
  // object that is passed into the dynamicsjs animate function - second parameter -  (see more at http://dynamicsjs.com/)
  animationProperties: Record<string, number>;
  // object that is passed into the dynamicsjs animate function (see more at http://dynamicsjs.com/)
  animationSettings: { complete: () => void };
};

type Options = {
  // stack's perspective value
  perspective: number;
  // stack's perspective origin
  perspectiveOrigin: string;
  // infinite navigation
  infinite: boolean;
  // number of visible items in the stack
  visible: number;
  // callback: when reaching the end of the stack
  onEndStack: () => void;
  // animation settings for the items' movements in the stack when the items rearrange
  // object that is passed to the dynamicsjs animate function (see more at http://dynamicsjs.com/)
  // example:
  // {type: dynamics.spring,duration: 1641,frequency: 557,friction: 459,anticipationSize: 206,anticipationStrength: 392}
  stackItemsAnimation: {
    duration: number;
    type: typeof dynamics.bezier;
    points: { x: number; y: number; cp: { x: number; y: number }[] }[];
  };
  // delay for the items' rearrangement / delay before stackItemsAnimation is applied
  stackItemsAnimationDelay: number;
  // animation settings for the items' movements in the stack before the rearrangement
  // we can set up different settings depending on whether we are approving or rejecting an item
  stackItemsPreAnimation?: {
    reject: Animation;
    accept: Animation;
  };
};

const defaultOptions: Options = {
  perspective: 1000,
  perspectiveOrigin: '50% -50%',
  visible: 3,
  infinite: true,
  onEndStack: () => {},
  stackItemsAnimation: {
    duration: 500,
    type: dynamics.bezier,
    points: [
      { x: 0, y: 0, cp: [{ x: 0.25, y: 0.1 }] },
      { x: 1, y: 1, cp: [{ x: 0.25, y: 1 }] },
    ],
  },
  stackItemsAnimationDelay: 0,
};

export function Stack<T extends HTMLElement>(
  elem: T | null,
  opts: Partial<Options>
) {
  let el = elem;

  if (!el) return null;

  const items = Array.from(el.children) as HTMLElement[];

  const itemsTotal = items.length;
  let options = { ...defaultOptions, ...opts };

  if (
    (options.infinite && options.visible >= itemsTotal) ||
    (!options.infinite && options.visible > itemsTotal) ||
    options.visible <= 0
  ) {
    options.visible = 1;
  }

  let current = 0;
  let hasEnded = false;
  let isAnimating = false;

  // set the initial styles for the visible items
  const _init = () => {
    if (!el) return;
    el.style.perspective = options.perspective + 'px';
    el.style.perspectiveOrigin = options.perspectiveOrigin;

    for (const index in items) {
      const item = items[index];

      if (parseInt(index) < options.visible) {
        item.style.opacity = '1';
        item.style.pointerEvents = 'auto';
        item.style.zIndex =
          parseInt(index) === 0
            ? `${options.visible + 1}`
            : `${options.visible - parseInt(index)}`;

        item.style.transform = `translate3d(
            0, 0,-${50 * parseInt(index)}px)`;
      } else {
        item.style.transform = `translate3d(
          0,0,-${options.visible * 50}px)`;
      }
    }

    items[current].classList.add('stack__item--current');
  };

  _init();

  const reject = (callback?: () => void) => {
    _next('reject', callback);
  };

  const accept = (callback?: () => void) => {
    _next('accept', callback);
  };

  const restart = () => {
    hasEnded = false;
    _init();
  };

  const _next = function(action: 'accept' | 'reject', callback?: () => void) {
    if (isAnimating || (!options.infinite && hasEnded)) return;
    isAnimating = true;

    // current item
    const currentItem = items[current];
    currentItem.classList.remove('stack__item--current');

    // add animation class
    currentItem.classList.add(
      action === 'accept' ? 'stack__item--accept' : 'stack__item--reject'
    );

    onEndAnimation(currentItem, () => {
      currentItem.style.opacity = '0';
      currentItem.style.pointerEvents = 'none';
      currentItem.style.zIndex = '-1';
      currentItem.style.transform = `
      translate3d(0px, 0px, -${options.visible * 50}px)`;

      currentItem.classList.remove(
        action === 'accept' ? 'stack__item--accept' : 'stack__item--reject'
      );

      currentItem.style.zIndex = `${options.visible + 1}`;
      isAnimating = false;

      if (callback) callback();

      if (!options.infinite && current === 0) {
        hasEnded = true;
        // callback
        options.onEndStack();
      }
    });

    // set style for the other items
    let { visible, infinite } = options;
    for (let i = 0; i < itemsTotal; ++i) {
      if (i >= visible) break;

      let pos;
      if (!infinite) {
        if (current + i >= itemsTotal - 1) break;
        pos = current + i + 1;
      } else {
        pos =
          current + i < itemsTotal - 1
            ? current + i + 1
            : i - (itemsTotal - current - 1);
      }

      const item = items[pos];
      // stack items animation

      const animate = (element: HTMLElement, opts: Options) => {
        element.style.pointerEvents = 'auto';
        element.style.opacity = '1';
        element.style.zIndex = `${opts.visible - i}`;

        dynamics.animate(
          item,
          {
            translateZ: -`${50 * i}`,
          },
          opts.stackItemsAnimation
        );
      };
      setTimeout(() => {
        let preAnimation;

        if (options.stackItemsPreAnimation) {
          preAnimation =
            action === 'accept'
              ? options.stackItemsPreAnimation.accept
              : options.stackItemsPreAnimation.reject;
        }

        if (preAnimation) {
          // items "pre animation" properties
          const animProps: Record<string, unknown> = {};

          for (let key in preAnimation.animationProperties) {
            let interval = preAnimation.elastic
              ? preAnimation.animationProperties[key] / options.visible
              : 0;
            animProps[key] =
              preAnimation.animationProperties[key] - Number(i * interval);
          }

          // this one remains the same..
          animProps.translateZ = -`${50 * (i + 1)}`;

          preAnimation.animationSettings.complete = () => {
            animate(item, options);
          };

          dynamics.animate(item, animProps, preAnimation.animationSettings);
        } else {
          animate(item, options);
        }
      }, options.stackItemsAnimationDelay);
    }

    current = current < itemsTotal - 1 ? current + 1 : 0;
    items[current].classList.add('stack__item--current');
  };

  const updateOpts = (next: Options) => {
    options = { ...options, ...next };
  };

  return { accept, reject, restart, updateOpts };
}
