import React from 'react'
import classnames from 'classnames/bind'
import { Link } from 'react-router'
import styles from './styles.scss'

const cx = classnames.bind(styles)

const Tab = ({ label, link, selected }) => {
  const selectedClass = cx(styles.tracker, {
    selected,
  })
  return (
    <div className={styles.component}>
      <Link to={link}>
        {label}
      </Link>
      <div className={selectedClass} />
    </div>
  )
}

export default Tab
