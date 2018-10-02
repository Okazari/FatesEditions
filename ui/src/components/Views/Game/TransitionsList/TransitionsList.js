import React from 'react'
import posed from 'react-pose'
import classnames from 'classnames'
import RollButton from './RollButton'
import Transition from './Transition'
import styles from './style.scss'

const StaggeredChildrenList = posed.div({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    delayChildren: 300,
    staggerChildren: 50,
  },
})

const TransitionsList = ({ transitions, rolls, stats, visible, className }) => {
  const finalClassName = classnames(styles.transitionsList, className)
  return (
    <StaggeredChildrenList
      className={finalClassName}
      pose={visible ? 'visible' : 'hidden'}
    >
      {
        rolls.map(roll => (
          <RollButton
            key={roll.id}
            stats={stats}
            roll={roll}
            className={styles.rollButton}
          />
        ))
      }
      {
        transitions.map((transitionId) => {
          return (
            <Transition
              key={transitionId}
              transitionId={transitionId}
            />
          )
        })
      }
    </StaggeredChildrenList>
  )
}
export default TransitionsList
