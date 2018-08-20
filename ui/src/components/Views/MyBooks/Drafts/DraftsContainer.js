import React from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { BookGrid, Loader } from 'components/common'
import AddNewDraft from './AddNewDraft'
import BookTile from './BookTile'

const core = `
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
`

const query = gql`
  query Author {
    author {
      ${core}
    }
  }
`

const deleteBookMutation = gql`
  mutation DeleteBook ($id: ID!) {
    deleteBook(id: $id) {
      ${core}
    }
  }
`

const DraftContainer = () => {
  return (
    <Query
      query={query}
      fetchPolicy={'cache-and-network'}
    >
      {
        ({ loading, error, data }) => {
          if (loading) return <Loader />
          if (error) return null
          return (
            <Mutation
              mutation={deleteBookMutation}
            >
              {
                (deleteBook) => {
                  const _deleteBook = id => deleteBook({ variables: { id } })
                  return (
                    <BookGrid
                      tilesList={data.author.drafts}
                      FirstTileComponent={AddNewDraft}
                      TileComponent={BookTile}
                      onDelete={_deleteBook}
                    />
                  )
                }
              }
            </Mutation>
          )
        }
      }
    </Query>
  )
}

export default DraftContainer
