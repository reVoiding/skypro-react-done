/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react'
import './Square.css'

const Square = () => {
  const [count, setCount] = useState('red')
  const hidden = (value) => {
    setCount(value)
  }

  return (
    <div className="square">
      {count === 'red' && (
        <div className="red" onClick={() => hidden('blue')} />
      )}
      {count === 'blue' && (
        <div className="blue" onClick={() => hidden('green')} />
      )}
      {count === 'green' && (
        <div className="green" onClick={() => hidden('red')} />
      )}
    </div>
  )
}

export default Square
