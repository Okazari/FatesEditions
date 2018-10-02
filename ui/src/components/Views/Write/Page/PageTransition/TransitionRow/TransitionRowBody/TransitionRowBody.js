import React from 'react'
import ConditionTable from './ConditionTable'
import EffectTable from './EffectTable'
import RollTable from './RollTable'
import styles from './style.scss'

const TransitionRowBody = ({
  hostRef,
  book,
  pageId,
  transition,
  index,
  updateTransition,
}) => {
  return (
    <div
      className={styles.component}
      ref={hostRef}
    >
      <ConditionTable
        book={book}
        pageId={pageId}
        transition={transition}
        index={index}
        updateTransition={updateTransition}
      />
      <EffectTable
        book={book}
        pageId={pageId}
        transition={transition}
        effects={transition.effects}
        index={index}
      />
      <RollTable
        book={book}
        pageId={pageId}
        transition={transition}
        rolls={transition.rolls}
        index={index}
      />
    </div>
  )
}

export default TransitionRowBody
