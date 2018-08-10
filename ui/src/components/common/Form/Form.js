import React from 'react'
import classnames from 'classnames'
import styles from './style.scss'

const Form = ({ onSubmit, className, children }) => (
  <div className={styles.component}>
    <form
      className={classnames(styles.form, className)}
      onSubmit={(e) => e.preventDefault() || onSubmit(e)}
    >
      {children}
    </form>
  </div>
)

export default Form
