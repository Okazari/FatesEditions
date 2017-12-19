import React from 'react'
import styles from './styles.scss'

const ToolbarIcon = ({ onToggle, style }) => {
  return (
    <li className={styles.toolbarIcon}>
      <a className={styles.toolbarIconLink} onClick={() => onToggle(style.style)}>
        <i className={style.icon} />
      </a>
    </li>
  )
}

export default ToolbarIcon
