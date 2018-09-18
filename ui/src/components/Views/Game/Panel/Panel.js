import React from 'react'
import posed from 'react-pose'
import { GamePanels } from 'components/common'
import styles from './style.scss'



const Panel = ({ panelState }) => {
  return (
    <div className={styles.panel}>
      {
        GamePanels.reduce(
          (acc, panel) => panelState === panel.key
            ? [...acc, <panel.component key={panel.key} />]
            : acc,
          [],
        )
      }
    </div>
  )
}

export default Panel
