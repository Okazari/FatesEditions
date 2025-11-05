import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { RouteService } from 'services'
import DeleteButton from './DeleteButton'

const mutation = gql`
  mutation DeleteBook ($id: ID!) {
    deleteBook(id: $id) {
      id
      drafts {
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

const DeleteButtonContainer = ({ bookId }) => (
  <Mutation
    mutation={mutation}
  >
    {
      (deleteBook) => {
        const _deleteBook = id => deleteBook({
          variables: {
            id,
          },
        }).then(() => {
          RouteService.goTo(RouteService.routes.writedrafts())
        })
        return (
          <DeleteButton onClick={() => _deleteBook(bookId)} />
        )
      }
    }
  </Mutation>
)

export default DeleteButtonContainer
