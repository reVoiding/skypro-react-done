const MinMax = ({ min = 1, max, current, onChange }) => {
  const applyCurrent = (num) => {
    const validNum = Math.max(min, Math.min(max, num))
    return onChange(validNum)
  }

  const parseCurrent = (e) => {
    const num = parseInt(e.target.value, 10)
    return applyCurrent(Number.isNaN(num) ? min : num)
  }

  const inc = () => applyCurrent(current + 1)
  const dec = () => applyCurrent(current - 1)

  return (
    <div>
      <button type="button" onClick={dec}>
        -
      </button>
      <input type="text" value={current} onChange={parseCurrent} />
      <button type="button" onClick={inc}>
        +
      </button>
    </div>
  )
}

export default MinMax
