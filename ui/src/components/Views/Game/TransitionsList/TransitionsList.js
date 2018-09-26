import React from 'react'
import posed from 'react-pose'
import classnames from 'classnames'
import RollButton from './RollButton'
import Transition from './Transition'
import styles from './style.scss'

const List = posed.div({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    delayChildren: 300,
    staggerChildren: 50,
  },
})

const TransitionsList = ({ transitions, page, stats, visible, className }) => {
  const finalClassName = classnames(styles.transitionsList, className)
  return (
    <List
      className={finalClassName}
      pose={visible ? 'visible' : 'hidden'}
    >
      {
        !!transitions && transitions.map((transitionId) => {
          return (
            <Transition
              key={transitionId}
              transitionId={transitionId}
            />
          )
        })
      }
      {
        page.rolls.map(roll => (
          <RollButton
            key={roll.id}
            stats={stats}
            roll={roll}
            className={styles.rollButton}
          />
        ))
      }
    </List>
  )
}
export default TransitionsList
