/* eslint-disable max-classes-per-file */
import React from 'react'

class Apps extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: 0,
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  }

  componentDidMount() {
    console.log('Component DID MOUNT!')
  }

  setNewNumber() {
    this.setState((prevState) => ({ data: prevState.data + 1 }))
  }

  render() {
    return (
      <div id="apps">
        <button type="button" onClick={this.setNewNumber}>
          INCREMENT
        </button>
        <Content myNumber={this.state.data} />
      </div>
    )
  }
}

class Content extends React.Component {
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.data) {
      console.log('componentDidUpdate')
    }
  }

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    )
  }
}
export default Apps
