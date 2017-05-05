// can't use es modules as this is required by node as well, and node does not
// support es6 modules natively
const {h, Component} = require('preact')

module.exports = class StaticOnly extends Component {
  constructor () {
    super()
    this.state.counter = 0
  }

  render () {
    return (
      <div className='c static-only'>
        <p>Hello, I am a component that is rendered only as static html. I am not interactive since I am just html only.</p>
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
