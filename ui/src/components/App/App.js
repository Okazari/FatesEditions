import React from 'react'
import styles from './style.scss'
import classnames from 'classnames'
import Header from './Header'
import Sidebar from './Sidebar'

const App = () => {
  const className = classnames(
    'skin-blue',
    'sidebar-mini',
    'sidebar-open',
    styles.component
  )
  return (
    <div className={className}>
      <div className="wrapper">
        <Header />
        <Sidebar />
      </div>
    </div>
  )
}

export default App
