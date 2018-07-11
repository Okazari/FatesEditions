import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService } from 'services'
import GamesList from './GamesList'

export const query = gql`
  query getGames($playerId: ID!){
    author(id: $playerId){
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

// TODO: Add loader and error display
const GamesListContainer = () => (
  <Query
    query={query}
    variables={{
      playerId: AuthService.getConnectedUserId(),
    }}
    fetchPolicy={'network-only'}
  >
    {
      ({ loading, error, data }) => {
        if (loading) return null
        if (error) return null
        return <GamesList gamesList={data.author.games} />
      }
    }
  </Query>
)

export default GamesListContainer

