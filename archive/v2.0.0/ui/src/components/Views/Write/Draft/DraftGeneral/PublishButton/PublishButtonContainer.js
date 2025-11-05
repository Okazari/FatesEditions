import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { RouteService } from 'services'
import PublishButton from './PublishButton'

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

const PublishButtonContainer = ({ bookId }) => (
  <Mutation
    mutation={mutation}
  >
    {
      (publishBook, { error }) => {
        const _publishBook = id => publishBook({
          variables: {
            id,
          },
        }).then(() => {
          RouteService.goTo(RouteService.routes.book(id))
        })
        return (
          <PublishButton onClick={() => _publishBook(bookId)} error={error} />
        )
      }
    }
  </Mutation>
)

export default PublishButtonContainer
