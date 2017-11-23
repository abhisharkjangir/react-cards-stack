import React from 'react';
import '../lib/modernizr.js'
import '../lib/stack.js'
import '../lib/stack.css'

class Fancy extends React.Component {
  constructor() {
    super()
    this.state = {
      stack: undefined,
      imgs: undefined,
      postivebtnlabel: undefined,
      negativebtnlabel: undefined
    }
    this.reject = this.reject.bind(this)
    this.accept = this.accept.bind(this)
    this.onEndStack = this.onEndStack.bind(this)
  }

  componentDidMount() {
    let stack = new Stack(document.getElementById('stack_krisna'))
    stack.options.infinite = false
    stack.options.onEndStack = this.onEndStack
    this.setState({stack: stack})
  }

  componentWillMount() {
    this.setState({
      imgs: this.props.images,
      postivebtnlabel: this.props.postivebtnlabel || 'Yes',
      negativebtnlabel: this.props.negativebtnlabel || 'No'
    })
  }

  onEndStack() {
    this.props.onstackendfn()
  }

  reject() {
    let stack = this.state.stack
    stack.reject()
  }

  accept() {
    let stack = this.state.stack
    stack.accept()
  }

  render() {
    return (
      <div className="stack-container">
        <ul id="stack_krisna" className="stack stack--krisna">
          {
            this.state.imgs && this.state.imgs.map((img, i) => <div key={i} className="stack__item">
              <img src={img}/>
            </div>)
          }
        </ul>
        <div className="controls">
          <div>
            <button onClick={this.reject}>
              {this.state.negativebtnlabel}
            </button>
            <button onClick={this.accept}>
              {this.state.postivebtnlabel}
            </button>
          </div>
        </div>
    </div>);
  }
}

export default Fancy;
