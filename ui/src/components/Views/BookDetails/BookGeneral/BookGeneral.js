import React from 'react'
import { Showdown } from 'components/common'
import CommentaryBox from './CommentaryBox'
import styles from './style.scss'

const BookGeneral = ({ book }) => {
  return (
    <div className={styles.component}>
      <Showdown book={book} />
      {/* <div className={styles.info}>
        <div className={styles.pages}>
          Nombre de pages: {book.pages.length}
        </div>
        <div className={styles.stats}>
          <div>
            {
              book.stats.map(stat => (stat.visible
                ? <div key={stat.id}>{stat.name}</div>
                : null),
              )
            }
          </div>
        </div>
      </div> */}
      <CommentaryBox book={book} />
    </div>
  )
}

export default BookGeneral
