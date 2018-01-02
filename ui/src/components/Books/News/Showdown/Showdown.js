import React from 'react'
import Book from 'components/common/Book'
import styles from './style.scss'

const Showdown = ({ book }) => {
    // TODO Replace with loader
  if (!book) return null
  return (
    <div className={styles.component}>
      <div className={styles.preview}>
        <Book bookId={book._id} />
      </div>
      {
        book.synopsis &&
        <div className={styles.synopsis}>
          {book.synopsis}
          <div className={styles.ellipsis} />
        </div>
      }
    </div>
  )
}


export default Showdown
