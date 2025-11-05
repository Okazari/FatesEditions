import React from 'react'
import { WideButton, AnimatedList } from 'components/common'
import TransitionRow from './TransitionRow'
import styles from './styles.scss'

const PageTransition = ({ book, page, addTransition, removeTransition }) => {
  if (!page) return null
  return (
    <div className={styles.component}>
      <WideButton className={styles.button} domProps={{ onClick: addTransition }}>
        {'Ajouter une transition'}
      </WideButton>
      <AnimatedList list={page.transitions}>
        {
          (transition, index) => <TransitionRow
            book={book}
            pageId={page.id}
            transition={transition}
            removeTransition={removeTransition}
            index={index}
          />
        }
      </AnimatedList>
    </div>
  )
}

export default PageTransition
