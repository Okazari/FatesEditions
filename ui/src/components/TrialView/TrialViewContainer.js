import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import AuthService from 'services/AuthService'
import TrialView from './TrialView'

const query = gql`
  query tryGame($bookId: ID!, $playerId: ID!) {
    tryGame(bookId: $bookId, playerId: $playerId) {
      id
      currentPageId
      playerId
      book {
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
          username
        }
        pages {
          id
          title
          description
          text
          effects {
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
const TrialViewContainer = ({ params }) => {
  return (
    <Query
      query={query}
      variables={{
        bookId: params.bookId,
        playerId: AuthService.getConnectedUserId(),
      }}
    >
      {
        ({ loading, error, data }) => {
          if (loading) return null
          if (error) return null
          const game = data.tryGame
          console.log(game)
          return <TrialView gameId={game.id} key={game.id} game={game} />
        }
      }
    </Query>
  )
}

// Create Store and populate it with data from graphQL response
export default TrialViewContainer
