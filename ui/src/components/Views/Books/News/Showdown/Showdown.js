import React from 'react'
import Loader from 'components/common/Loader'
import Button from 'components/common/Button'
import PlayableBook from '../../common/PlayableBook'
import styles from './style.scss'

const Showdown = ({ book, onClick }) => {
  if (!book) return <Loader />
  return (
    <div className={styles.component}>
      <div className={styles.preview}>
        <PlayableBook content={book} />
      </div>
      {
        book.synopsis &&
        <div className={styles.content}>
          <div className={styles.synopsis}>
            {book.synopsis}
          </div>
          <Button domProps={{ onClick }}>Jouer</Button>
        </div>
      }
    </div>
  )
}

export default Showdown
