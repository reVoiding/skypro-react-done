import { useState } from 'react'

import MinMax from './MinMax'

function booksStub() {
  return [
    {
      id: 101,
      title: 'Война и мир - Л.Н.Толстой',
      price: 800,
      rest: 10,
      quantity: 1,
    },
    {
      id: 102,
      title: 'Две жизни - К.Е.Антарова',
      price: 700,
      rest: 5,
      quantity: 1,
    },
    {
      id: 103,
      title: 'Разговор с богом - Н.Д.Уолша',
      price: 1000,
      rest: 2,
      quantity: 1,
    },
    {
      id: 104,
      title: 'Хохот Шамана - В.П.Серкин',
      price: 600,
      rest: 8,
      quantity: 1,
    },
    {
      id: 105,
      title: 'Хроники Ехо - Макс Фрай',
      price: 400,
      rest: 8,
      quantity: 1,
    },
  ]
}

const BookCart = () => {
  const [books, setBooks] = useState(booksStub())

  const total = books.reduce((sum, book) => sum + book.price * book.quantity, 0)

  const removeBook = (id) => {
    setBooks(books.filter((el) => el.id !== id))
  }

  const setQuatinty = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    )
  }
  return (
    <div>
      <h1>books list</h1>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {books.map((book, i) => (
            <tr key={book.id}>
              <td>{i + 1} </td>
              <td>{book.title} </td>
              <td>{book.price} </td>
              <td>
                <MinMax
                  max={book.rest}
                  current={book.quantity}
                  onChange={(quantity) => setQuatinty(book.id, quantity)}
                />
              </td>
              <td>{book.price * book.quantity} </td>
              <td>
                <button type="button" onClick={() => removeBook(book.id)}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <strong>Total: {total}</strong>
      <hr />
    </div>
  )
}
export default BookCart
