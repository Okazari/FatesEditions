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
    <Link to={link} className={styles.component}>
      {label}
      <div className={selectedClass} />
    </Link>
  )
}

export default Tab
