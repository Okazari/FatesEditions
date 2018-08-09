import React from 'react'
import sizeMe from 'react-sizeme'
import { Loader, BookWrapper } from 'components/common'
import styles from './style.scss'

const BookGrid = ({
  tilesList,
  FirstTileComponent,
  TileComponent,
  onDelete,
  size,
}) => {
  // Width - padding(10) - grid-gap(10) / minimum-book-size(200) + grid-gap(10)x2
  const nbColumns = Math.floor((size.width - 20) / 220)
  if (!tilesList) return <Loader />
  return (
    <div className={styles.list}>
      { !!FirstTileComponent &&
        <FirstTileComponent />
      }
      {
        tilesList.map((content, index) => {
          const usedIndex = FirstTileComponent ? index + 1 : index
          const delay = 100 * ((usedIndex % nbColumns) + Math.floor(index / nbColumns) + 1)
          return (
            <BookWrapper
              key={content.id}
            >
              <TileComponent content={content} showDelay={delay} onDelete={onDelete} />
            </BookWrapper>
          )
        })
      }
    </div>
  )
}

export default sizeMe()(BookGrid)
