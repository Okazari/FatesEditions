import React from 'react'
import RollButton from './RollButton'
import Transition from './Transition'
import styles from './style.scss'

const TransitionsList = ({ transitions, page, stats }) => {
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
      {
        page.roll && page.roll.active &&
        <RollButton
          stats={stats}
          roll={page.roll}
          displayed
          className={styles.rollButton}
        />
      }
    </div>
  )
}
export default TransitionsList
