import React from 'react'
import styles from './style.scss'

const Item = ({ name }) => (
  <div className={styles.component}>{name}</div>
)

export default Item
