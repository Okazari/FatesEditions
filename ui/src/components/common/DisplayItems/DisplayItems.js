import React from 'react'
import Item from './Item'
import styles from './style.scss'

const DisplayItems = ({ items }) => (
  <div className={styles.component}>
    <div className={styles.title}>Objets</div>
    <div className={styles.itemsGrid}>
      {
        items.map(itemId => <Item key={itemId} itemId={itemId} />)
      }
    </div>
  </div>
)

export default DisplayItems
