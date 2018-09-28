import React from 'react'
import classnames from 'classnames'
import { GamePanels } from 'components/common'
import styles from './style.scss'

const Panel = ({ panelState }) => {
  const finalClassName = classnames(styles.panel, {
    [styles.opened]: panelState,
  })
  return (
    <div className={finalClassName}>
      {
        GamePanels
          .filter(panel => panelState === panel.key)
          .map(panel => <panel.component key={panel.key} />)
      }
    </div>
  )
}

export default Panel
