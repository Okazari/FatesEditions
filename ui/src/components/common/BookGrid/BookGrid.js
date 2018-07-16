import React from 'react'
import styles from './style.scss'

const BookGrid = ({ tilesList, FirstComponent, TileComponent, onDelete }) => {
  const nbColumns = document && Math.floor((document.body.clientWidth - 100) / 240)
  // TODO Replace with loader
  if (!tilesList) return null
  return (
    <div className={styles.component}>
      <div className={styles.list}>
        { !!FirstComponent &&
          <FirstComponent />
        }
        {
          tilesList.map((content, index) => {
            const usedIndex = FirstComponent ? index + 1 : index
            const delay = 100 * ((usedIndex % nbColumns) + Math.floor(index / nbColumns) + 1)
            return (
              <div
                key={content.id}
                className={styles.book}
              >
                <TileComponent content={content} delay={delay} onDelete={onDelete} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BookGrid
