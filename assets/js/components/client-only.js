// can't use es modules as this is required by node as well, and node does not
// support es6 modules natively
const {h, Component} = require('preact')

module.exports = class ClientOnly extends Component {
  constructor () {
    super()
    this.state.counter = 0
  }

  render () {
    return (
      <div className='c client-only'>
        <p>Hello, I am a component that is only rendered on the client side!</p>
        <p>Props: foo = {this.props.foo}</p>
        <p>
          <button onClick={this.increment.bind(this)}>Click me!</button>
          <span>{this.state.counter}</span>
        </p>
        {this.props.children}
      </div>
    )
  }

  increment () {
    this.setState({ counter: this.state.counter + 1 })
  }
}
