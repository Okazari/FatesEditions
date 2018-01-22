import React from 'react'
import { Button } from 'components/common'
import TransitionRow from './TransitionRow'
import styles from './styles.scss'

const PageTransition = ({ book, page, addTransition, removeTransition }) => {
  if (!page) return null

  const doAddTransition = () => addTransition({
    variables: {
      bookId: book.id,
      pageId: page.id,
    },
  })

  const doRemoveTransition = transitionId => removeTransition({
    variables: {
      bookId: book.id,
      pageId: page.id,
      transitionId,
    },
  })

  return (
    <div className={styles.component}>
      {
        page.transitions && page.transitions.map((transition, index) =>
          <TransitionRow
            key={transition.id}
            book={book}
            pageId={page.id}
            transition={transition}
            removeTransition={doRemoveTransition}
            index={index}
          />,
        )
      }
      <Button className="md-whiteframe-z1" domProps={{ onClick: doAddTransition }}>
        {'Ajouter une transition'}
      </Button>
    </div>
  )
}

export default PageTransition
