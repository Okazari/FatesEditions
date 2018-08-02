import React from 'react'
import { Book } from 'components/common'
import styles from './style.scss'

const BookGeneral = ({ book }) => {
  return (
    <div className={styles.component}>
      <div className={styles.row}>
        <div className={styles.preview}>
          <Book book={book} />
        </div>
        <div className={styles.rowContent}>
          <div className={styles.title}>
            {book.name}
          </div>
          <div className={styles.author}>
            {book.author.username}
          </div>
          <div className={styles.synopsis}>
            {book.synopsis}
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.pages}>
          Nombre de pages: {book.pages.length}
        </div>
        <div className={styles.stats}>
          <div>
            {
              book.stats.map(stat => (stat.visible
                ? <div key={stat.id}>{stat.name}</div>
                : null),
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookGeneral
