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
                selected={tab.link === selectedTab || `${tab.link}/` === selectedTab}
                key={tab.label}
                label={tab.label}
                link={tab.link}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Tabs
