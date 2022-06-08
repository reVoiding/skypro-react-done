import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = { curCount: props.minValue }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ curCount: event.target.value })
  }

  incrementUp = () => {
    if (Number(this.state.curCount) < this.props.maxValue) {
      this.setState((prevState) => ({
        curCount: Number(prevState.curCount) + 1,
      }))
    }
  }

  incrementDown = () => {
    if (this.state.curCount > this.props.minValue) {
      this.setState((prevState) => ({
        curCount: Number(prevState.curCount) - 1,
      }))
    }
  }

  render() {
    return (
      <>
        <hr />
        <div>
          <button type="button" onClick={this.incrementDown}>
            Жми -
          </button>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.curCount}
          />
          <button type="button" onClick={this.incrementUp}>
            Жми +
          </button>
        </div>
        <hr />
      </>
    )
  }
}
