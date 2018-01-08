import React from 'react'
import Book from 'components/common/Book'
import styles from './style.scss'

const Publications = ({ books, postResource, deleteResource }) => {
  const nbColumns = document && Math.floor((document.body.clientWidth - 100) / 240)
  // TODO Replace with loader
  if (!books) return null
  return (
    <div className={styles.list}>
      {
        books.map((book, index) => {
          const delay = 100 * ((index % nbColumns) + Math.floor(index / nbColumns))
          return (
            <div
              key={book.id}
              className={styles.book}
            >
              <Book showDelay={delay} book={book} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Publications
