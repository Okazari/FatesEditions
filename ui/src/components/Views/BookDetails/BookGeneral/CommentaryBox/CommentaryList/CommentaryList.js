import React from 'react'
import Commentary from './Commentary'
import styles from './style.scss'

const CommentaryList = ({ bookId, list }) => (
  <div className={styles.component}>
    {
      list.map(commentary => (
        <Commentary key={commentary.id} commentary={commentary} bookId={bookId} />
      ))
    }
  </div>
)

export default CommentaryList
