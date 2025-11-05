import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { BookGrid, ToDetailsBook } from 'components/common'

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
        ({ data: { books } }) => <BookGrid tilesList={books} TileComponent={ToDetailsBook} />
      }
    </Query>
  )
}

export default LibraryContainer
