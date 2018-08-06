import React from 'react'
import { Loader, Button, BookWrapper } from 'components/common'
import PlayableBook from '../../common/PlayableBook'
import styles from './style.scss'

const Showdown = ({ book, onClick }) => {
  if (!book) return <Loader />
  return (
    <div className={styles.component}>
      <div className={styles.grid}>
        <BookWrapper>
          <PlayableBook content={book} />
        </BookWrapper>
        {
          book.synopsis && book.name &&
          <div className={styles.content}>
            <div className={styles.detailsWrapper}>
              <div className={styles.title}>{book.name}</div>
              <div className={styles.author}>de {book.author.username}</div>
              <div className={styles.synopsis}>
                {book.synopsis}
              </div>
            </div>
            <Button domProps={{ onClick }}>Jouer</Button>
          </div>
        }
      </div>
    </div>
  )
}

export default Showdown
