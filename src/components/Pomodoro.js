/* eslint-disable class-methods-use-this */
import { Component } from 'react'

export default class Timer extends Component {
  constructor() {
    super()
    this.state = {
      time: 0,
    }
    this.times = {
      defaultTime: 1500,
      shortBreak: 300,
      longBreak: 900,
    }
  }

  componentDidMount() {
    this.setDefaultTime()
  }

  setDefaultTime = () => {
    this.setState({
      time: this.times.defaultTime,
    })
  }

  setTimeForWork = () => this.setTime(this.times.defaultTime)

  setTimeForShortBreak = () => this.setTime(this.times.shortBreak)

  setTimeForLongBreak = () => this.setTime(this.times.longBreak)

  setTime = (newTime) => {
    this.restartInterval()
    this.setState({
      time: newTime,
    })
  }

  restartInterval = () => {
    clearInterval(this.interval)
    this.interval = setInterval(this.countDown, 1000)
  }

  countDown = () => {
    if (this.state.time !== 0) {
      this.setState((prevState) => ({ time: prevState.time - 1 }))
    }
  }

  displayTimer(seconds) {
    const m = Math.floor((seconds % 3600) / 60)
    const s = Math.floor((seconds % 3600) % 60)
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`
  }

  render() {
    const { time } = this.state
    return (
      <div className="Pomodoro">
        <div className="timer">{this.displayTimer(time)}</div>
        <div className="types">
          <button type="button" className="start" onClick={this.setTimeForWork}>
            Start Working
          </button>
          <button
            type="button"
            className="short"
            onClick={this.setTimeForShortBreak}
          >
            Short Break
          </button>
          <button
            type="button"
            className="long"
            onClick={this.setTimeForLongBreak}
          >
            Long Break
          </button>
        </div>
      </div>
    )
  }
}
