import React from 'react'
import styles from './style.scss'
import Stats from './Stats'

const DisplayStats = ({ stats }) => (
  <div className={styles.component}>
    <div className={styles.title}>Statistiques</div>
    {
      Object.entries(stats).sort().map(([id, value]) => <Stats key={id} id={id} value={value} />)
    }
  </div>
)

export default DisplayStats
