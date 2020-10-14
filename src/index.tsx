import React, { Component, createRef } from 'react';
import { Stack } from './stack';
import './stack.css';

export type State = {
  imgs?: unknown[];
  query?: unknown;
  queryclass?: unknown;
  imgclass?: unknown;
  postivebtnlabel?: unknown;
  negativebtnlabel?: unknown;
  postivebtnclass?: unknown;
  negativebtnclass?: unknown;
  effect?: unknown;
  infinite?: unknown;
};

export type Props = {
  images: unknown[];
  postivebtnlabel?: unknown;
  negativebtnlabel?: unknown;
  postivebtnclass?: unknown;
  negativebtnclass?: unknown;
  query?: unknown;
  queryclass?: unknown;
  imgclass?: unknown;
  effect?: unknown;
  infinite?: unknown;
  onstackendfn?: () => void;
};

type StackType = ReturnType<typeof Stack>;

export class CardStack extends Component<Props, State> {
  state = {
    imgs: [],
    query: undefined,
    queryclass: undefined,
    imgclass: undefined,
    postivebtnlabel: undefined,
    negativebtnlabel: undefined,
    postivebtnclass: undefined,
    negativebtnclass: undefined,
    effect: undefined,
    infinite: undefined,
  };

  stack: StackType | null = null;

  ref = createRef<HTMLUListElement>();

  componentDidMount() {
    this.stack = Stack(this.ref.current, {
      infinite: !!this.state.infinite,
      onEndStack: this.onEndStack,
    });
  }

  componentWillMount() {
    this.setState({
      imgs: this.props.images,
      postivebtnlabel: this.props.postivebtnlabel || 'Yes',
      negativebtnlabel: this.props.negativebtnlabel || 'No',
      postivebtnclass: this.props.postivebtnclass || '',
      negativebtnclass: this.props.negativebtnclass || '',
      query: this.props.query || undefined,
      queryclass: this.props.queryclass || '',
      imgclass: this.props.imgclass || '',
      effect: this.props.effect || 'krisna',
      infinite: this.props.infinite || false,
    });
  }

  onEndStack = () => {
    this.props.onstackendfn && this.props.onstackendfn();
  };

  reject = () => {
    this.stack?.reject();
  };

  accept = () => {
    this.stack?.accept();
  };

  render() {
    return (
      <div className="stack-container">
        <ul ref={this.ref} className={`stack stack--${this.state.effect}`}>
          {this.state.imgs &&
            this.state.imgs.map((img, i) => (
              <li key={i} className="stack__item">
                <img src={img} alt="" />
              </li>
            ))}
        </ul>
        <div className="controls">
          <div>
            <p className={this.state.queryclass}>{this.state.query}</p>
            <button
              className={this.state.negativebtnclass}
              onClick={this.reject}
            >
              {this.state.negativebtnlabel}
            </button>
            <button
              className={this.state.postivebtnclass}
              onClick={this.accept}
            >
              {this.state.postivebtnlabel}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
