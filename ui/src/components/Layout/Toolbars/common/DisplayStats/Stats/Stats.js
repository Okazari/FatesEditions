import React from 'react'
import styles from './style.scss'

const Stats = ({ stat, value }) => {
  return (
    <div className={styles.component}>
      <div className={styles.name}>{stat.name}</div>
      <div>{value}</div>
      <div className={styles.description}>{stat.description}</div>
    </div>
  )
}

export default Stats
