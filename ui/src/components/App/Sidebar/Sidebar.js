import React from 'react'
import styles from './style.scss'
import Menu from './Menu'

const Sidebar = () => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <Menu />
      </section>
    </aside>
  )
}

export default Sidebar