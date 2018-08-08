import React from 'react'
import { Showdown } from 'components/common'
import CommentaryBox from './CommentaryBox'
import styles from './style.scss'

const BookGeneral = ({ book }) => (
  <div className={styles.component}>
    <Showdown book={book} />
    <CommentaryBox book={book} />
  </div>
)

export default BookGeneral
