import React from 'react';
import './component.scss';
import { connect } from 'react-redux'


class Counter extends React.Component {

  increment = () => {
      console.log(this.props)
    this.props.dispatch({ type: "INCREMENT" })
    
    
  }

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" })
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count
})



export default connect(mapStateToProps)(Counter);