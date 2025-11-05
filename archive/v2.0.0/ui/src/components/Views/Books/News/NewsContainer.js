import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { BookGrid, Loader, Showdown, ToDetailsBook } from 'components/common'

const query = gql`
  query {
    showdown {
      id
      name
      cover
      synopsis
      author {
        id
        username
      }
      lastModificationDate
    }
    books(draft: false) {
      id
      name
      cover
      synopsis
      author {
        id
        username
      }
    }
  }
`

const NewsContainer = () => {
  return (
    <Query
      query={query}
      pollInterval={60 * 1000}
      fetchPolicy={'network-only'}
    >
      {
        ({ data }) => {
          const { books, showdown } = data
          if (!books) return <Loader />
          const booksCopy = books.filter(book => book.id !== showdown.id)
          return (
            <div>
              { !!showdown &&
                <Showdown book={showdown} BookComponent={ToDetailsBook} />
              }
              { !!books &&
                <BookGrid
                  tilesList={booksCopy}
                  TileComponent={ToDetailsBook}
                />
              }
            </div>
          )
        }
      }
    </Query>
  )
}

export default NewsContainer
