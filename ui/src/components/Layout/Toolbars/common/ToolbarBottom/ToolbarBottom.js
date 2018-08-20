import React from 'react'
import classnames from 'classnames'
import styles from './style.scss'

const ToolbarBottom = ({ children, className }) => (
  <div className={classnames(styles.bottom, className)}>
    {children}
  </div>
)

export default ToolbarBottom
