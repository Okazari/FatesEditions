import React from 'react'
import classnames from 'classnames'
import styles from './style.scss'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const App = ({ children }) => {
  const className = classnames(
    'skin-blue',
    'sidebar-mini',
    'sidebar-open',
    styles.component,
  )
  return (
    <div className={className}>
      <div className="wrapper">
        <Header />
        <Sidebar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default App
