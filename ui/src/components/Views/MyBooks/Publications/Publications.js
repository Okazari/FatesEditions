import React from 'react'
import { Book } from 'components/common'
import Loader from 'components/common/Loader'
import styles from './style.scss'

const Publications = ({ author = {}, unpublishBook }) => {
  const books = author.publications
  const nbColumns = document && Math.floor((document.body.clientWidth - 100) / 240)
  if (!books) return <Loader />
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
              <Book showDelay={delay} book={book} onDelete={() => unpublishBook(book.id)} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Publications
