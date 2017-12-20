import React from 'react'
import { Link as RouterLink } from 'react-router'
import { Icon } from 'components/common'
import styles from './style.scss'

const Link = ({ to, icon }) => {
  return (
    <div className={styles.link}>
      <RouterLink to={to}>
        <Icon domProps={{ className: styles.icon }} icon={icon} />
      </RouterLink>
    </div>
  )
}

export default Link
