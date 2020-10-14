import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CardStack } from '../.';
import '../dist/stack.css';

const App = () => {
  return (
    <div>
      <CardStack
        infinite
        images={[
          'https://picsum.photos/id/237/200/300',
          'https://picsum.photos/id/233/200/300',
          'https://picsum.photos/id/230/200/300',
        ]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
