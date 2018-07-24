import React from 'react'
import styles from './style.scss'

const BookGrid = ({
  tilesList,
  FirstTileComponent,
  FirstRowComponent,
  TileComponent,
  onDelete,
}) => {
  const nbColumns = document && Math.floor((document.body.clientWidth - 100) / 240)
  // TODO Replace with loader
  if (!tilesList) return null
  return (
    <div className={styles.component}>
      <div className={styles.list}>
        { !!FirstTileComponent &&
          <FirstTileComponent />
        }
        {
          tilesList.map((content, index) => {
            const usedIndex = FirstTileComponent ? index + 1 : index
            const delay = 100 * ((usedIndex % nbColumns) + Math.floor(index / nbColumns) + 1)
            return (
              <div
                key={content.id}
                className={styles.book}
              >
                <TileComponent content={content} showDelay={delay} onDelete={onDelete} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BookGrid
