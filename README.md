# 5.4. Жизненные циклы компонент (lifecycle)

## Задание

1 .Используя скелет компоненты, допишите код таймера до рабочего:

- В методах жизненных циклов определите взаимодействие с состоянием.
- Опишите события по кликам на кнопки.

```jsx
import React from 'react'
import './styles.css'

export default class ReacTimer extends React.Component {
  state = {
    count: 0,
    isCounting: false,
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="ReacTimer">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button onClick={this.handleStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}
```

2. **Написать классовый компонент Часы.**

- Часы должны отображать реальное время и обновляться каждую секунду.
- Используйте методы жизненного цикла.
- Не забудьте очистить компонент перед размонтированием.

  3\*(со звездочкой) **Написать компонент Pomodoro Tracker.**

- Компонент из 3х кнопок:

          Work Time - запускает таймер обратного отсчёта на 30 мин.


            Long Break - запускает таймер обратного отсчёта на 15 мин.

            Short Break - запускает таймер обратного отсчёта на 7 мин.

  _Комментарии к заданию в конце видео урока._
