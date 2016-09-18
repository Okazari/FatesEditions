import React from 'react'
import classnames from 'classnames'
import styles from './style.scss'

const Content = ({ children, title, breadcrumb }) => {
  const className = classnames('content-wrapper', styles.component)
  return (
    <div className={className}>
      <section className="content-header">
        <h1>{title}</h1>
        {breadcrumb}
      </section>
      <section className="content">
       {children}
      </section>
    </div>
  )
}

export default Content












