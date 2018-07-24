import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import BookGrid from 'components/common/BookGrid'
import PlayableBook from '../common/PlayableBook'
import Showdown from './Showdown'

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
          if (!books) return null
          const booksCopy = books.filter(book => book.id !== showdown.id)
          return (
            <div>
              { !!showdown &&
                <Showdown book={showdown} />
              }
              { !!books &&
                <BookGrid
                  tilesList={booksCopy}
                  TileComponent={PlayableBook}
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
