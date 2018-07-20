import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import DraftItems from './DraftItems'

const coreObject = `
  id
  name
  description
  atStart
  visible
`

const core = `
  id
  objects {
    ${coreObject}
  }
`

const query = gql`
  query BookById ($id: ID!) {
    book(id: $id) {
      ${core}
    }
  }
`

const queryOptions = {
  options: ({ params }) => ({
    variables: {
      id: params.draftId,
    },
  }),
  props: ({ data: { book } }) => ({
    book,
  }),
}

const addMutation = gql`
  mutation addObject($bookId: ID!) {
    createObject(bookId: $bookId) {
      ${core}
    }
  }
`

const addMutationOptions = {
  name: 'addObject',
}

const removeMutation = gql`
  mutation removeObject($bookId: ID!, $objectId: ID!) {
    deleteObject(bookId: $bookId, objectId: $objectId) {
      ${core}
    }
  }
`

const removeMutationOptions = {
  name: 'removeObject',
}

const updateMutation = gql`
  mutation updateObject($bookId: ID!, $object: ObjectInput!) {
    updateObject(bookId: $bookId, object: $object) {
      ${coreObject}
    }
  }
`

const updateMutationOptions = {
  name: 'updateObject',
}

const DraftItemsContainer = (props) => {
  const { book, addObject, removeObject, updateObject } = props
  const _addObject = () => addObject({ variables: { bookId: book.id } })
  const _removeObject = object => removeObject({
    variables: { bookId: book.id, objectId: object.id },
  })
  const _updateObject = object => updateObject({ variables: { bookId: book.id, object } })
  return (
    <DraftItems
      {...props}
      updateObject={_updateObject}
      removeObject={_removeObject}
      addObject={_addObject}
    />
  )
}


export default compose(
  graphql(query, queryOptions),
  graphql(addMutation, addMutationOptions),
  graphql(removeMutation, removeMutationOptions),
  graphql(updateMutation, updateMutationOptions),
)(DraftItemsContainer)
