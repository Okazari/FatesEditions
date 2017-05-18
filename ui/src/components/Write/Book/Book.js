import React from 'react'
import { Content } from 'components/App'
import BookInformation from './BookInformation'
import BookStat from './BookStat'
import BookItem from  './BookItem'
import BookGraph from './BookGraph'
import BookPage from './BookPage'
import styles from './styles.scss'

const Book = ({draft, updateResource}) => {
  return !draft ? null : (
    <Content title="Edition de livre" >
      <div className={styles.component}>
        <BookInformation draft={draft} updateResource={updateResource}/>
        <BookStat draft={draft} updateResource={updateResource}/>
        <BookItem draft={draft} updateResource={updateResource} />
        <div className={styles.row}>
          <BookGraph draft={draft}/>
          <BookPage query={{bookId:draft._id}}/>
        </div>
      </div>
    </Content>
  )
}

export default Book
