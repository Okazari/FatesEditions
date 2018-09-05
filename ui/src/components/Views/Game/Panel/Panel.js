import React from 'react'
import { GamePanels } from 'components/common'
import styles from './style.scss'

const Panel = ({ panelState }) => {
  return (
    <div className={styles.panel}>
      {
        GamePanels
          .filter(panel => panelState === panel.key)
          .map(panel => <panel.component key={panel.key} />)
      }
    </div>
  )
}

export default Panel
