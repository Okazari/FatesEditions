import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Loader from 'components/common/Loader'
import GameViewReduxContainer from './GameViewReduxContainer'

const query = gql`
query getGame($gameId: ID!) {
  game(gameId: $gameId) {
    id
    currentPageId
    playerId
    book {
      id
      name
      tags
      synopsis
      cover
      startingPageId
      genreId
      draft
      creationDate
      lastModificationDate
      revision
      stats {
        id
        name
        description
        initValue
        max
        min
        visible
      }
      objects {
        id
        name
        description
        atStart
        visible
      }
      author {
        id
        username
      }
      pages {
        id
        title
        description
        text
        effects {
          id
          operator
          subject
          value
          type
        }
        transitions {
          id
          fromPage
          toPage
          text
          conditionOperator
          effects {
            id
            operator
            subject
            value
            type
          }
          conditions {
            id
            operator
            subject
            value
            type
          }
        }
      }
    }
    stats
    objects
  }
}
`

// TODO: Add loading and error returns
const GameViewContainer = ({ params }) => {
  return (
    <Query
      query={query}
      variables={{
        gameId: params.gameId,
      }}
    >
      {
        ({ loading, error, data }) => {
          if (loading) return <Loader />
          if (error) return null
          const game = data.game
          return <GameViewReduxContainer key={game.id} game={game} />
        }
      }
    </Query>
  )
}

export default GameViewContainer
