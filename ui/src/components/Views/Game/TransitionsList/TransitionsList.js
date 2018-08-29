import React from 'react'
import Transition from './Transition'
import styles from './style.scss'

const TransitionsList = ({ transitions }) => (
  <div className={styles.transitionsList}>
    {
      !!transitions && transitions.map(transitionId => <Transition
        key={transitionId}
        transitionId={transitionId}
      />)
    }
  </div>
)

export default TransitionsList
