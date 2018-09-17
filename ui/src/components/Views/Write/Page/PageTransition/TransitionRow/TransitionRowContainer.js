import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { RouteService } from 'services'
import TransitionRow from './TransitionRow'

const core = `
  id
  toPage
  conditionOperator
  text
  conditions {
    id
    operator
    subject
    value
    type
  }
  effects {
    id
    operator
    subject
    value
    type
  }
  roll {
    active
    min
    max
    modifier
    stat
  }
`
const updateTransitionMutation = gql`
  mutation updatePageTransition($bookId: ID!, $pageId: ID!, $transition: TransitionInput!) {
    updatePageTransition(bookId: $bookId, pageId: $pageId, transition: $transition) {
      ${core}
    }
  }
`

const updateTransitionMutationOptions = {
  name: 'updateTransition',
}

const addMutation = gql`
  mutation addPage($bookId: ID!) {
    createPageReturnPage(bookId: $bookId) {
      id
    }
  }
`

const addMutationOptions = {
  name: 'addPage',
}

const TransitionRowContainer = (props) => {
  const { book = {}, pageId = {}, transition = {}, updateTransition, addPage } = props
  const bookId = book.id
  const _updateTransition = updatedTransition => updateTransition({
    variables: {
      pageId,
      bookId,
      transition: { id: transition.id, ...updatedTransition },
    },
  })
  const onLinkNewPage = () => {
    return addPage({ variables: { bookId } })
            .then(({ data: { createPageReturnPage } }) => {
              const newPageId = createPageReturnPage.id
              return _updateTransition({ toPage: newPageId }).then(
                () => RouteService.goTo(RouteService.routes.writebookpage(bookId, newPageId)),
              )
            })
  }
  return (
    <TransitionRow
      {...props}
      onLinkNewPage={onLinkNewPage}
      updateTransition={_updateTransition}
    />
  )
}

export default compose(
  graphql(updateTransitionMutation, updateTransitionMutationOptions),
  graphql(addMutation, addMutationOptions),
)(TransitionRowContainer)
