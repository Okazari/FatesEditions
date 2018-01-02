import React from 'react'
import { Button } from 'components/common'
import TransitionRow from './TransitionRow'
import styles from './styles.scss'

const PageTransition = ({ bookId, page, postResource, updateResource }) => {
  if (!page) return null
  const addTransition = () => {
    page.transitions = page.transitions.concat({
      fromPage: page._id,
      conditions: [],
      effects: [],
    })
    updateResource(page)
  }

  const removeTransition = (index) => {
    page.transitions.splice(index, 1)
    updateResource(page)
  }

  const updatePage = (index, transition) => {
    page.transitions[index] = transition
    updateResource(page)
  }

  return (
    <div className={styles.component}>
      {
        page.transitions && page.transitions.map((transition, index) =>
          <TransitionRow
            key={transition._id}
            bookId={bookId}
            pageId={page._id}
            transition={transition}
            index={index}
            postResource={postResource}
            updateResource={updatePage}
            removeTransition={removeTransition}
          />,
        )
      }
      <Button className="md-whiteframe-z1" domProps={{ onClick: addTransition }}>
        {'Ajouter une transition'}
      </Button>
    </div>
  )
}

export default PageTransition
