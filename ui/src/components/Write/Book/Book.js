import React from 'react'
import { Content } from '../../App'
import BookInformation from './BookInformation'
import BookStat from './BookStat'
import BookItem from './BookItem'
import BookGraph from './BookGraph'
import BookPage from './BookPage'
import styles from './styles.scss'

const Book = ({ draft, updateResource }) => {
  return !!draft && (
    <Content title="Edition de livre" >
      <div className={styles.component}>
        <BookInformation draft={draft} updateResource={updateResource} disabled={!draft.draft} />
        <BookStat draft={draft} updateResource={updateResource} disabled={!draft.draft} />
        <BookItem draft={draft} updateResource={updateResource} disabled={!draft.draft} />
        <div className={styles.row}>
          <BookGraph draft={draft} />
          <BookPage query={{ bookId: draft._id }} disabled={!draft.draft} />
        </div>
      </div>
    </Content>
  )
}

export default Book
