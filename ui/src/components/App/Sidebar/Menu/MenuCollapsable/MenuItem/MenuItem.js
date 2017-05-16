import React from 'react'
import classnames from 'classnames'
import styles from './style.scss'
import { Link } from 'react-router'

const MenuItem = ({ label, link, onClick, icon = 'circle-o' }) => {
  const className = classnames('fa', `fa-${icon}`)
  let internalComponent = null
  if (link) {
    internalComponent = (
      <Link to={link}>
        <i className={className}></i>
        {label}
      </Link>
    )
  } else {
    internalComponent = (
      <a>
        <i className={className}></i>
        {label}
      </a>
    )
  }

  return (
    <li onClick={onClick} className={styles.component}>
      {internalComponent}
    </li>
  )
}

export default MenuItem
