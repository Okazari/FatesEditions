import React from 'react'
import Transition from './Transition'
import styles from './style.scss'

const TransitionsList = ({ transitions }) => {
  const length = transitions.length
  return (
    <div className={styles.transitionsList}>
      {
        !!transitions && transitions.map((transitionId, index) => {
          const delay = Math.floor(150 / length) * index + 100
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
