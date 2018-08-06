import React from 'react'
import styles from './style.scss'

const Form = ({ onSubmit, children }) => (
  <div className={styles.component}>
    <form
      className={styles.form}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  </div>
)

export default Form
