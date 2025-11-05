import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './style.scss'

const Stats = ({ descriptionVisible, stat, value, toggleDescription }) => {
  const { icon, name, description, visible } = stat
  if (!visible) return null
  return (
    <div onClick={() => description && toggleDescription()}>
      <div className={styles.row}>
        <div className={styles.icon}>
          <FontAwesomeIcon
            icon={icon}
          />
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.value}>{value}</div>
        <div className={styles.status}>
          {
            descriptionVisible
            ? '-'
            : '+'
          }
        </div>
      </div>
      { descriptionVisible &&
        <div className={styles.description}>
          <div className={styles.fullName}>{name} :</div>
          {description}
        </div>
      }
    </div>
  )
}

export default Stats
