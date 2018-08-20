import React from 'react'
import { Button } from 'components/common'
import TransitionRow from './TransitionRow'
import styles from './styles.scss'

const PageTransition = ({ book, page, addTransition, removeTransition }) => {
  if (!page) return null
  return (
    <div className={styles.component}>
      <Button className="md-whiteframe-z1" domProps={{ onClick: addTransition }}>
        {'Ajouter une transition'}
      </Button>
      {
        page.transitions && page.transitions.map((transition, index) =>
          <TransitionRow
            key={transition.id}
            book={book}
            pageId={page.id}
            transition={transition}
            removeTransition={removeTransition}
            index={index}
          />,
        )
      }
    </div>
  )
}

export default PageTransition
