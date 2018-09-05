import React from 'react'
import Transition from './Transition'
import styles from './style.scss'

const TransitionsList = ({ transitions }) => {
  return (
    <div className={styles.transitionsList}>
      {
        !!transitions && transitions.map((transitionId, index) => {
          const delay = 50 * index + 100
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
}
export default TransitionsList
