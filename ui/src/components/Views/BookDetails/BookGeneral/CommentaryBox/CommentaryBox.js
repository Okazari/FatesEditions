import React from 'react'
import CommentaryList from './CommentaryList'
import CommentaryInput from './CommentaryInput'
import styles from './style.scss'

const CommentaryBox = ({ book }) => (
  <div className={styles.component}>
    <CommentaryList book={book} />
    <CommentaryInput />
  </div>
)

export default CommentaryBox