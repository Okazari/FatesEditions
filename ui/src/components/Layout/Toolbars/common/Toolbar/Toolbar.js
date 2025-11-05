import React from 'react'
import classnames from 'classnames'
import styles from './style.scss'

const Toolbar = ({ children, className }) => (
  <div className={classnames(styles.component, className)}>
    {children}
  </div>
)

export default Toolbar
