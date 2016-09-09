import React from 'react'
import { Link } from 'react-router'
import styles from './style.scss'
const AdviceLink = ({ advice, link, label }) => {
  return (
    <div className={styles.component}>
      <label>
        {advice}
      </label>
      <Link to={link}>{label}</Link>
    </div>
  )
}

export default AdviceLink
