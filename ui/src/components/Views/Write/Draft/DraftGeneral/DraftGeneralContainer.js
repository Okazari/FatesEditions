import React from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Loader } from 'components/common'
import DraftGeneral from './DraftGeneral'

const query = gql`
  query BookById ($id: ID!) {
    book(id: $id) {
      id
      name
      cover
      author {
        id
        username
      }
      genreId
      synopsis
      startingPageId
      pages {
        id
        title
      }
      stats {
        id
        initValue
      }
    }
  }
`


const mutation = gql`
  mutation updateBook($book: BookInput!) {
    updateBook(book: $book) {
      id
      name
      cover
      genreId
      synopsis
      startingPageId
    }
  }
`

const DraftGeneralContainer = (props) => {
  return (
    <Query
      query={query}
      variables={{
        id: props.params.draftId,
      }}
    >
      {
        ({ loading, data }) => {
          if (loading) return <Loader />
          const { book } = data
          return (
            <Mutation
              mutation={mutation}
            >
              {
                (updateBook) => {
                  const _updateBook = updatedBook => updateBook({
                    variables: {
                      book: {
                        id: book.id,
                        ...updatedBook,
                      },
                    },
                  })
                  return (
                    <DraftGeneral
                      book={book}
                      updateBook={_updateBook}
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

export default DraftGeneralContainer

