import React from 'react'
import Loader from 'components/common/Loader'
import PlayableBook from '../../common/PlayableBook'
import styles from './style.scss'

const Showdown = ({ book }) => {
  if (!book) return <Loader />
  return (
    <div className={styles.component}>
      <div className={styles.preview}>
        <PlayableBook content={book} />
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
