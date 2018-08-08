import React from 'react'
import classnames from 'classnames'
import Form from '../Form'
import styles from './style.scss'

const NarrowForm = ({ onSubmit, className, children }) => (
    <Form
      className={classnames(styles.component, className)}
      onSubmit={onSubmit}
    >
      {children}
    </Form>
)

export default NarrowForm
