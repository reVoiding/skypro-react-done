import React from 'react'

const interval = 100

class Timer extends React.Component {
  // Инициализация состояния
  constructor(props) {
    super(props)
    this.state = { value: 0 }
  }

  componentDidMount() {
    // заводим таймер
    this.timerId = setInterval(() => this.increment(), 1000 / interval)
  }

  componentWillUnmount() {
    // наводим порядок после удаления компонента
    clearInterval(this.timerId)
  }

  increment() {
    this.setState((prevState) => ({ value: prevState.value + 1 }))
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <p>Timer:</p>
        <p>
          <span>{`${Math.round(value / interval / 60 / 60)}`} : </span>
          <span>{`${Math.round(value / interval / 60)}`} : </span>
          <span>{`${Math.round(value / interval)}`} . </span>
          <span>{`${value % interval}`}</span>
        </p>
      </div>
    )
  }
}

export default Timer
