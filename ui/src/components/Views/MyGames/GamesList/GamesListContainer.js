import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import BookGrid from 'components/common/BookGrid'
import Loader from 'components/common/Loader'
import GameTile from './GameTile'

export const query = gql`
  query getGames {
    author {
      id
      games {
        id
        playerId
        currentPageId
        lastModificationDate
        book {
          id
          name
          cover
          pages {
            id
            title
          }
          author {
            id
            username
          }
        }
      }
    }
  }
`

// TODO: Add error display
const GamesListContainer = () => (
  <Query
    query={query}
    fetchPolicy={'cache-and-network'}
  >
    {
      ({ loading, error, data }) => {
        if (loading) return <Loader />
        if (error) return null
        return <BookGrid tilesList={data.author.games} TileComponent={GameTile} />
      }
    }
  </Query>
)

export default GamesListContainer

