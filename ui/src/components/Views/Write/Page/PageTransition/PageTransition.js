import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { WideButton } from 'components/common'
import { dataRow } from 'styles/reactPoseAnimation'
import TransitionRow from './TransitionRow'
import styles from './styles.scss'

const AnimatedTransitionRow = posed(TransitionRow)(dataRow)

const PageTransition = ({ book, page, addTransition, removeTransition }) => {
  if (!page) return null
  return (
    <div className={styles.component}>
      <WideButton className={styles.button} domProps={{ onClick: addTransition }}>
        {'Ajouter une transition'}
      </WideButton>
      <PoseGroup>
        {
          page.transitions && page.transitions.map((transition, index) =>
            <AnimatedTransitionRow
              key={transition.id}
              book={book}
              pageId={page.id}
              transition={transition}
              removeTransition={removeTransition}
              index={index}
            />,
          )
        }
      </PoseGroup>
    </div>
  )
}

export default PageTransition
