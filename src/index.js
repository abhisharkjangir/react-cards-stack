import React from 'react';
import '../lib/modernizr.js'
import '../lib/dynamics.js'
import '../lib/classie.js'
import '../lib/stack.js'
import '../lib/stack.css'


class Fancy extends React.Component {
  constructor(){
    super()
    this.state ={
      stack : undefined,
      imgs : undefined
    }
    this.reject = this.reject.bind(this)
    this.accept = this.accept.bind(this)
  }

  componentDidMount() {
    let stack = new Stack(document.getElementById('stack_krisna'))
    stack.options.infinite = false
    stack.options.onEndStack = this.onEndStack
    this.setState({stack: stack})
  }

  componentWillMount(){
    this.setState({
      imgs: this.props.images
    })
  }

  reject(){
    let stack = this.state.stack
    stack.reject()
  }

  accept(){
    let stack = this.state.stack
    stack.accept()
  }

  render() {
    return (
      <div className="stack-container">
      <ul id="stack_krisna" className="stack stack--krisna">
        {this.state.imgs && this.state.imgs.map((img,i) =>
          <div key={i} className="stack__item">
            <img src={img} />
          </div>
        )}
      </ul>
      <div className="controls">
        <div>
          <button  onClick={this.reject}>
            No
          </button>
          <button  onClick={this.accept} >
            Yes
          </button>
        </div>
      </div>
    </div>
    );
  }
}

export default Fancy;
