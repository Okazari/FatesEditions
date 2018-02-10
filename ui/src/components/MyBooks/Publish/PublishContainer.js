//eslint-disable-next-line
import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService } from 'services'
import Publish from './Publish'

const query = gql`
  query AuthorById ($id: ID!) {
    author(id: $id) {
      id
      drafts {
        id
        name
        startingPageId
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
  options: ({ params: { draftId, pageId } }) => ({
    variables: {
      id: AuthService.getConnectedUserId(),
    },
  }),
  props: ({ data: { loading, author } }) => ({
    author,
  }),
}

const mutation = gql`
  mutation publishBook($id: ID!) {
    publishBook(id: $id) {
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
  name: 'publishBook',
}

const PublishContainer = (props) => {
  const { publishBook } = props
  const _publishBook = id => publishBook({
    variables: {
      id,
    },
  })
  return (
    <Publish {...props} publishBook={_publishBook} />
  )
}

export default compose(
  graphql(query, queryOptions),
  graphql(mutation, mutationOptions),
)(PublishContainer)
