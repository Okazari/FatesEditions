import React from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Loader } from 'components/common'
import { RouteService } from 'services'
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


const updateBookMutation = gql`
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

const deleteBookMutation = gql`
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

const DraftGeneralContainer = (props) => {
  return (
    <Query
      query={query}
      variables={{
        id: props.params.draftId,
      }}
    >
      {
        ({ loading, error, data }) => {
          if (loading) return <Loader />
          if (error) return null
          const { book } = data
          return (
            <Mutation
              mutation={updateBookMutation}
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
                    <Mutation
                      mutation={deleteBookMutation}
                    >
                      {
                        (deleteBook) => {
                          const _deleteBook = id => deleteBook({
                            variables: { id },
                          }).then(() => {
                            RouteService.goTo(RouteService.routes.writedrafts())
                          })
                          return (
                            <DraftGeneral
                              book={book}
                              updateBook={_updateBook}
                              deleteBook={_deleteBook}
                            />
                          )
                        }
                      }
                    </Mutation>
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

