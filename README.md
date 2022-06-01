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

3. ![star](https://user-images.githubusercontent.com/28350003/171338957-c0e81bca-26e1-47e3-9367-dd5636966cc2.png) **Написать компонент Pomodoro Tracker.**

- Компонент из 3х кнопок и отображения обратного отсчёта:

  - Work Time - запускает таймер обратного отсчёта на 30 мин.

  - Long Break - запускает таймер обратного отсчёта на 15 мин.

  - Short Break - запускает таймер обратного отсчёта на 7 мин.


![image](https://user-images.githubusercontent.com/28350003/171354399-2970e52c-5db3-4cea-ae22-268533186a84.png)

