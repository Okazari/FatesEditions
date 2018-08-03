import React from 'react'
import classnames from 'classnames'
import styles from './style.scss'

const ToolbarTop = ({ children, className }) => (
  <div className={classnames(styles.top, className)}>
    {children}
  </div>
)

export default ToolbarTop
