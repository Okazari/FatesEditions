import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import AddNewDraft from './AddNewDraft'

const createBookMutation = gql`
  mutation CreateBook {
    createBook {
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

const AddNewDraftContainer = () => (
  <Mutation
    mutation={createBookMutation}
  >
    {
      (createBook) => {
        const _createBook = () => createBook()
        return <AddNewDraft onClick={_createBook} />
      }
    }
  </Mutation>
)

export default AddNewDraftContainer
