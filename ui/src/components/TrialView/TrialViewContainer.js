import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import AuthService from 'services/AuthService'
import TrialViewReduxContainer from './TrialViewReduxContainer'

const query = gql`
  query tryGame($bookId: ID!, $playerId: ID!) {
    tryGame(bookId: $bookId, playerId: $playerId) {
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
const TrialViewContainer = ({ params }) => (
  <Query
    query={query}
    variables={{
      bookId: params.bookId,
      playerId: AuthService.getConnectedUserId(),
    }}
    fetchPolicy={'network-only'}
  >
    {
      ({ loading, error, data }) => {
        if (loading) return null
        if (error) return null
        const game = data.tryGame
        return <TrialViewReduxContainer key={game.id} game={game} />
      }
    }
  </Query>
)

export default TrialViewContainer
