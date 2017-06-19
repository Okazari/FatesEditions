import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../../common/Box'
import { Button } from '../../../common'
import TransitionRow from './TransitionRow'

const PageTransition = ({ bookId, page, postResource, updateResource }) => {
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

  return page && (
    <div>
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Transitions</h3>
        </BoxHeader>
        <BoxBody>
          {page.transitions.map((transition, index) =>
            <TransitionRow
              key={transition._id}
              bookId={bookId}
              pageId={page._id}
              transition={transition}
              index={index}
              postResource={postResource}
              updateResource={updatePage}
              removeTransition={removeTransition}
            />)}
        </BoxBody>
        <BoxFooter className="align-center">
          <Button className="md-whiteframe-z1" domProps={{ onClick: addTransition }}>
            {'Ajouter une transition'}
          </Button>
        </BoxFooter>
      </Box>
    </div>
  )
}

export default PageTransition
