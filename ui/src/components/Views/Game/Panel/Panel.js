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
