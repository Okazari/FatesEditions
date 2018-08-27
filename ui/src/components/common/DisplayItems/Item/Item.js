import React from 'react'
import styles from './style.scss'

const Item = ({ item, descriptionVisible, toggleDescription }) => {
  const { name, description } = item
  return (
    <div className={styles.component}>
      <div onClick={() => description && toggleDescription()}>
        <div className={styles.name}>{name}</div>
      </div>
      { descriptionVisible &&
        <div className={styles.description}>{description}</div>
      }
    </div>
  )
}

export default Item
