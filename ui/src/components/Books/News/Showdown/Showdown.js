import React from 'react'
import styles from './style.scss'
import Book from '../../common/Book'

const Showdown = ({ draft }) => {
    // TODO Replace with loader
  if (!draft) return null
  return (
    <div className={styles.component}>
      <div className={styles.preview}>
        <Book draftId={draft._id} />
      </div>
      <div className={styles.synopsis}>
        {draft.synopsis}
        <div className={styles.ellipsis} />
      </div>
    </div>
  )
}


export default Showdown
