import React from 'react'
import styles from './style.scss'

const Stats = ({ name, value }) => (
  <div>
    <div className={styles.name}>{name}</div>
    <div>{value}</div>
  </div>
)

export default Stats
