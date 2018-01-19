import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

const composeCRUD = (key, core) => {
  const keyLowercase = key.toLowerCase()
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
    mutation add${key}($bookId: ID!) {
      create${key}(bookId: $bookId) {
        ${core}
      }
    }
  `

  const addMutationOptions = {
    name: `add${key}`,
  }

  const removeMutation = gql`
    mutation remove${key}($bookId: ID!, $${keyLowercase}Id: ID!) {
      delete${key}(bookId: $bookId, ${keyLowercase}Id: $${keyLowercase}Id) {
        ${core}
      }
    }
  `

  const removeMutationOptions = {
    name: `remove${key}`,
  }

  const updateMutation = gql`
    mutation update${key}($bookId: ID!, $${keyLowercase}: ${key}Input!) {
      update${key}(bookId: $bookId, ${keyLowercase}: $${keyLowercase}) {
        ${core}
      }
    }
  `

  const updateMutationOptions = {
    name: `update${key}`,
  }

  return compose(
    graphql(query, queryOptions),
    graphql(addMutation, addMutationOptions),
    graphql(removeMutation, removeMutationOptions),
    graphql(updateMutation, updateMutationOptions),
  )
}

export default composeCRUD
