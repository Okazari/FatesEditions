import React from 'react'
import CommentaryList from './CommentaryList'
import CommentaryInput from './CommentaryInput'
import styles from './style.scss'

const CommentaryBox = ({ book }) => (
  <div className={styles.component}>
    <CommentaryList bookId={book.id} />
    <CommentaryInput bookId={book.id} />
  </div>
)

export default CommentaryBox
