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

const publishBookMutation = gql`
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
                            <Mutation
                              mutation={publishBookMutation}
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
                                    <DraftGeneral
                                      book={book}
                                      updateBook={_updateBook}
                                      deleteBook={_deleteBook}
                                      publishBook={_publishBook}
                                      error={error}
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
            </Mutation>
          )
        }
      }
    </Query>
  )
}

export default DraftGeneralContainer

