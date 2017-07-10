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

const Book = ({ draft, updateResource }) => {
  return !!draft && (
    <Content title="Edition de livre" >
      <div className={styles.component}>
        <BookInformation book={draft} updateResource={updateResource} />
        <BookStat book={draft} updateResource={updateResource} />
        <BookItem book={draft} updateResource={updateResource} />
        <div className={styles.row}>
          <BookGraph book={draft} />
          <BookPage query={{ bookId: draft._id }} />
        </div>
      </div>
    </Content>
  )
}

export default Book
