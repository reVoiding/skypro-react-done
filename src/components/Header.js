const a = 123
const b = 'Hi'
const c = 14
const arrNum = [1, 2, 3]

function fun() {
  const f = 2
  return f * 2
}

const tab = (
  <table>
    <tbody>
      <tr>
        <th>One</th>
        <th>Two</th>
        <th>3</th>
      </tr>
      <tr>
        <th>1</th>
        <th>2</th>
        <th>Three</th>
      </tr>
    </tbody>
  </table>
)

const redColor = 'red'

const objStyle = {
  color: 'green',
  background: 'red',
}

const Header = () => (
  <div>
    <p>Привет, Реакт!</p>
    <h1>Title</h1>
    <p>Paragraph</p>
    <p>Вывод переменных\const</p>
    <div>{a}</div>
    <div>{b}</div>
    <div>{arrNum}</div>
    <p>Вывод массивов</p>
    <div>{arrNum.map((item) => item)}</div>
    <p>Вывод массивов-создание разметки</p>
    <ul>
      {arrNum.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <p>Вывод массивов-сумма элементов массивов</p>
    <ul>{arrNum.reduce((prevItem, item) => item + prevItem)}</ul>
    <p> Условный рендеринг</p>
    <div>{c < 10 ? 'Hello' : 'Bye'}</div>
    <p>Вызов функции </p>
    <div>{fun()}</div>
    <div />
    <p>Таблица</p>
    <div>{tab}</div>
    <p>Стили JSX</p>
    <p className="red">Красный</p>
    <p style={{ color: redColor }}>Красный</p>
    <p style={objStyle}>Разное</p>
  </div>
)
export default Header
