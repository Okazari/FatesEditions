import React from 'react'
import { Link as RouterLink } from 'react-router'
import styles from './style.scss'

const Link = ({ to, icon }) => {
  return (
    <div className={styles.link}>
      <RouterLink to={to}>
        <div className={styles.fakeIcon}>{icon}</div>
      </RouterLink>
    </div>
  )
}

export default Link
