import React from 'react'
import { Icon } from 'components/common'
import styles from './style.scss'

const Item = ({ item, descriptionVisible, toggleDescription }) => {
  const { name, description, visible } = item
  if (!visible) return null
  return (
    <div onClick={() => description && toggleDescription()}>
      <div className={styles.row}>
        <Icon className={styles.icon} icon="build" />
        <div className={styles.name}>{name}</div>
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

export default Item
