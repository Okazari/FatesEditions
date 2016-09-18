import React from 'react'
import classnames from 'classnames'
import styles from './style.scss'
const MenuItem = ({ label, link, icon = 'circle-o' }) => {
  const className = classnames('fa', `fa-${icon}`)
  return (
    <li className={styles.component}>
      <a href={link}>
        <i className={className}></i>
        {label}
      </a>
    </li>
  )
}

export default MenuItem