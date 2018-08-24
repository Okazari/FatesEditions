import React from 'react'
import styles from './style.scss'

const Item = ({ item }) => {
  const { name, description } = item
  return (
    <div className={styles.component}>
      <div className={styles.hover}>
        <div className={styles.name}>{name}</div>
      </div>
      { !!description &&
        <div className={styles.description}>{description}</div>
      }
    </div>
  )
}

export default Item
