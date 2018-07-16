import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import Publications from './Publications'

const query = gql`
  query Author {
    author {
      id
      publications {
        id
        name
        cover
        author {
          id
          username
        }
      }
    }
  }
`

const queryOptions = {
  props: ({ data: { loading, author } }) => ({
    author,
  }),
}

const mutation = gql`
  mutation unpublishBook($id: ID!) {
    unpublishBook(id: $id) {
      id
      publications {
        id
      }
      drafts {
        id
      }
    }
  }
`

const mutationOptions = {
  name: 'unpublishBook',
}

const PublicationsContainer = (props) => {
  const { unpublishBook } = props
  const _unpublishBook = id => unpublishBook({
    variables: {
      id,
    },
  })
  return (
    <Publications {...props} unpublishBook={_unpublishBook} />
  )
}

export default compose(
  graphql(query, queryOptions),
  graphql(mutation, mutationOptions),
)(PublicationsContainer)
