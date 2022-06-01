import React from 'react'

class Date extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  render() {
    return <div>Время: {this.state.date.toLocaleDateString()} </div>
  }
}

export default Date
