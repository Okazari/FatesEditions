import React from 'react'
import styles from './style.scss'

const Stats = ({ descriptionVisible, stat, value, toggleDescription }) => {
  const { name, description, visible } = stat
  if (!visible) return null
  return (
    <div className={styles.component}>
      <div onClick={() => description && toggleDescription()}>
        <div className={styles.name}>{name}</div>
        <div>{value}</div>
        { descriptionVisible &&
          <div className={styles.description}>{description}</div>
        }
      </div>
    </div>
  )
}

export default Stats
