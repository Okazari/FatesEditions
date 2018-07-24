import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import BookGrid from 'components/common/BookGrid'
import PlayableBook from '../common/PlayableBook'

const query = gql`
  query {
    books(draft: false) {
      id
      name
      cover
      author {
        id
        username
      }
    }
  }
`

const LibraryContainer = () => {
  return (
    <Query
      query={query}
      pollInterval={60 * 1000}
      fetchPolicy={'cache-and-network'}
    >
      {
        ({ data: { books } }) => <BookGrid tilesList={books} TileComponent={PlayableBook} />
      }
    </Query>
  )
}

export default LibraryContainer
