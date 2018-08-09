import React from 'react'
import { Loader, Button, BookWrapper, LastGameButton } from 'components/common'
import styles from './style.scss'

const Showdown = ({ book, onClick, BookComponent }) => {
  if (!book) return <Loader />
  return (
    <div className={styles.component}>
      <div className={styles.grid}>
        <BookWrapper>
          <BookComponent content={book} />
        </BookWrapper>
        {
          <div className={styles.content}>
            <div className={styles.detailsWrapper}>
              <div className={styles.title}>{book.name}</div>
              <div className={styles.author}>de {book.author.username}</div>
              <div className={styles.synopsis}>
                {book.synopsis}
              </div>
            </div>
            <div className={styles.buttons}>
              <Button domProps={{ onClick }}>Nouvelle Partie</Button>
              <LastGameButton book={book} />
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Showdown
