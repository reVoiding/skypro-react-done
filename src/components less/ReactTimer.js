/* eslint-disable no-unused-expressions */
import React from 'react'

export default class ReacTimer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      isCounting: false,
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.increment(), 1000)
  }

  componentDidUpdate(prevState) {
    // при нажатии кнопок запускаем или останавливаем таймер
    if (this.state.isCounting !== prevState.isCounting) {
      this.state.isCounting ? this.startTimer() : this.stopTimer()
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  handleStart = () => {
    this.setState({ isCounting: true })
  }

  handleStop = () => {
    this.setState({ isCounting: false })
  }

  handleReset = () => {
    this.setState({ isCounting: false, count: 0 })
  }

  startTimer = () => {
    if (this.timerId === null) {
      this.timerId = setInterval(
        () => this.setState((prevState) => ({ count: prevState.count + 1 })),
        1000
      )
    }
  }

  stopTimer = () => {
    if (this.timerId !== null) {
      clearInterval(this.timerId)
      this.timerId = null
    }
  }

  increment() {
    this.setState((prevState) => ({
      count: Number(prevState.count) + 1,
    }))
  }

  render() {
    return (
      <div className="ReacTimer">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button type="button" onClick={this.handleStart}>
            Start
          </button>
        ) : (
          <button type="button" onClick={this.handleStop}>
            Stop
          </button>
        )}
        <button type="button" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    )
  }
}
