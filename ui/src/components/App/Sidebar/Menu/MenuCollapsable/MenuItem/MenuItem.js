import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'
import styles from './style.scss'

const MenuItem = ({ label, link, onClick, icon = 'circle-o' }) => {
  const className = classnames('fa', `fa-${icon}`)
  let internalComponent = null
  if (link) {
    internalComponent = (
      <Link to={link}>
        <i className={className} />
        {label}
      </Link>
    )
  } else {
    internalComponent = (
      <a>
        <i className={className} />
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
