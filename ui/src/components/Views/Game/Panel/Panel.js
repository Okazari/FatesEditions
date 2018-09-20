import React from 'react'
import { GamePanels } from 'components/common'
import styles from './style.scss'

const Panel = ({ panelState }) => {
  return (
    <div className={styles.panel}>
      {
        GamePanels.reduce(
          (acc, panel) => {
            return panelState === panel.key
            ? [...acc, <panel.component key={panel.key} />]
            : acc
          },
          [],
        )
      }
    </div>
  )
}

export default Panel
