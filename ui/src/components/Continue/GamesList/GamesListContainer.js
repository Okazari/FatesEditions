import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService } from 'services'
import GamesList from './GamesList'

const query = gql`
  query games($playerId: ID!){
    games(playerId: $playerId){
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
      console.log('data in GamesListContainer : ', data)
      if (loading) return null
      if (error) return null
      return <GamesList gamesList={data.games} />
    } 
  }
  </Query>
)

export default GamesListContainer

