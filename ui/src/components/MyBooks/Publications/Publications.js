import React from 'react'
import { Book, ButtonIcon } from 'components/common'
import styles from './style.scss'

const Publications = ({ author = {}, unpublishBook }) => {
  const books = author.publications
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
              <div className={styles.delete}>
                <ButtonIcon
                  icon="delete_forever"
                  className={styles.action}
                  domProps={{
                    onClick: () => unpublishBook(book.id),
                  }}
                />
              </div>
              <Book showDelay={delay} book={book} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Publications