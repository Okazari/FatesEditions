import React from 'react'
import { Showdown, PlayableBook } from 'components/common'
import CommentaryBox from './CommentaryBox'
import styles from './style.scss'

const BookGeneral = ({ book }) => (
  <div className={styles.component}>
    <Showdown book={book} BookComponent={PlayableBook} />
    <CommentaryBox book={book} />
  </div>
)

export default BookGeneral
