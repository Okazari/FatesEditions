import React from 'react'
import CommentaryList from './CommentaryList'
import CommentaryInput from './CommentaryInput'
import styles from './style.scss'

const CommentaryBox = ({ bookId }) => (
  <div className={styles.component}>
    <CommentaryList bookId={bookId} />
    <CommentaryInput bookId={bookId} />
  </div>
)

export default CommentaryBox
