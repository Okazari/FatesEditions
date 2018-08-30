import React from 'react'
import Transition from './Transition'
import styles from './style.scss'

const TransitionsList = ({ transitions }) => (
  <div className={styles.transitionsList}>
    {
      !!transitions && transitions.map((transitionId, index) => {
        const delay = 50 * index + 200
        return (
          <Transition
            key={transitionId}
            transitionId={transitionId}
            delay={delay}
          />
        )
      })
    }
  </div>
)

export default TransitionsList
