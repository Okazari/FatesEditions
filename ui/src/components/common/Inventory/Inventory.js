import React from 'react'
import styles from './style.scss'

const Inventory = ({ children }) => (
  <div className={styles.inventory}>
    {children}
  </div>
)

export default Inventory
