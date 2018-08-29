import React from 'react'
import classnames from 'classnames'
import Panel from './Panel'
import Page from './Page'
import TransitionsList from './TransitionsList'
import styles from './styles.scss'

const Game = ({ panelState }) => {
  const wrapperClassName = classnames(panelState && styles.panelIsOpen, styles.wrapper)
  return (
    <div className={styles.content}>
      <Panel />
      <div className={wrapperClassName}>
        <Page />
        <TransitionsList />
      </div>
    </div>
  )
}

export default Game
