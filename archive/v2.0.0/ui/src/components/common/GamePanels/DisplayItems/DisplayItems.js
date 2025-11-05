import React from 'react'
import Item from './Item'
import styles from './style.scss'

const DisplayItems = ({ items }) => (
  <div className={styles.component}>
    <div className={styles.title}>Objets {'&'} Compétences</div>
    {
      items.map(itemId => <Item key={itemId} itemId={itemId} />)
    }
  </div>
)

export default DisplayItems
