import React from 'react'

class Increment extends React.Component {
  constructor(props) {
    super(props)
    this.state = { current: 1 }
  }

  inc = () => {
    this.setState((prevState) => ({ current: prevState.current + 1 }))
  }

  render() {
    return (
      <div>
        <span>{this.state.current}</span>
        <button type="button" onClick={this.inc}>
          {' '}
          +{' '}
        </button>
      </div>
    )
  }
}

export default Increment
