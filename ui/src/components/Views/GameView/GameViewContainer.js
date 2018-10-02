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
        icon
      }
      objects {
        id
        name
        description
        atStart
        visible
        icon
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
        rolls {
          id
          min
          max
          modifier
          stat
        }
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
          rolls {
            id
            min
            max
            modifier
            stat
          }
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

// TODO: Add error returns
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
          if (loading) return <Loader white />
          if (error) return null
          const game = data.game
          return <GameViewReduxContainer key={game.id} game={game} />
        }
      }
    </Query>
  )
}

export default GameViewContainer
