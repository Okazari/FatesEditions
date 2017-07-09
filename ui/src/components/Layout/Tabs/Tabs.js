import React from 'react'
import styles from './styles.scss'
import Tab from './Tab'

const Tabs = ({ tabs, onSelect, selectedTab }) => {
  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        {
          tabs.map((tab) => {
            return (
              <Tab
                selected={tab === selectedTab}
                key={tab.label}
                label={tab.label}
                domProps={{ onClick: e => onSelect(tab, e.target) }}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Tabs
