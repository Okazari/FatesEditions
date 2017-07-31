import React from 'react'
import { Content } from '../../App'
import {
  BookInformation,
  BookStat,
  BookItem,
  BookGraph,
  BookPage,
} from '../../common/Book'
import styles from './styles.scss'

const Book = ({ book, updateResource }) => {
  return !!book && (
  <Content title="Edition de livre" >
    <div className={styles.component}>
      <BookInformation book={book} updateResource={updateResource} disabled />
      <BookStat book={book} updateResource={updateResource} disabled />
      <BookItem book={book} updateResource={updateResource} disabled />
      <div className={styles.row}>
        <BookGraph book={book} />
        <BookPage query={{ bookId: book._id }} disabled />
      </div>
    </div>
  </Content>
    )
}

export default Book
