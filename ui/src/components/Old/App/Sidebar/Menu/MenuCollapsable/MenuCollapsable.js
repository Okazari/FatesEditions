import React from 'react'
import classnames from 'classnames'
import styles from './style.scss'

const MenuCollapsable = ({ children, label, icon, collapsed = false }) => {
  const containerClassName = classnames('treeview', { active: !collapsed })
  const menuClassName = classnames('treeview-menu', { 'menu-open': !collapsed })
  const carretClassName = classnames(
    ['fa', 'pull-right'],
    {
      'fa-angle-left': collapsed,
      'fa-angle-down': !collapsed,
    },
  )
  const iconClassName = classnames('fa', `fa-${icon}`, styles.icon)
  return (
    <li className={containerClassName}>
      <a>
        <i className={iconClassName} />
        <span>{label}</span>
        <i className={carretClassName} />
      </a>
      <ul className={menuClassName}>
        { children }
      </ul>
    </li>
  )
}

export default MenuCollapsable
