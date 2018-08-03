import React from 'react'
import styles from './style.scss'

const Stats = ({ stat, value }) => {
  const { name, description, visible } = stat
  if (!visible) return null
  return (
    <div className={styles.component}>
      <div className={styles.hover}>
        <div className={styles.name}>{name}</div>
        <div>{value}</div>
      </div>
      { !!description &&
        <div className={styles.description}>{description}</div>
      }
    </div>
  )
}

export default Stats
