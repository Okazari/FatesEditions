import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Loader } from 'components/common'
import BookGeneral from './BookGeneral'

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
        description
      }
      objects {
        id
        name
        description
        atStart
        visible
      }
      stats {
        id
        name
        description
        visible
        initValue
        min
        max
      }
      commentaries {
        id
        text
        lastModificationDate
        creationDate
        author {
          id
          username
        }
      }
    }
  }
`

const BookGeneralContainer = ({ params }) => {
  const { bookId } = params
  return (
    <Query query={query} variables={{ id: bookId }}>
      {
        ({ data, loading }) => {
          if (loading) return <Loader />
          const { book } = data
          return <BookGeneral book={book} />
        }
      }
    </Query>
  )
}

export default BookGeneralContainer
