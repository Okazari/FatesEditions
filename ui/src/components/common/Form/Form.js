import React from 'react'
import styles from './style.scss'

const Form = ({ onSubmit, children }) => (
  <form
    className={styles.component}
    onSubmit={onSubmit}
  >
    {children}
  </form>
)

export default Form
