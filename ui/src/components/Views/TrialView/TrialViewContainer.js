import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Loader from 'components/common/Loader'
import TrialViewReduxContainer from './TrialViewReduxContainer'

const query = gql`
  query tryGame($bookId: ID!) {
    tryGame(bookId: $bookId) {
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
          roll {
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
            roll {
              active
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
const TrialViewContainer = ({ params }) => (
  <Query
    query={query}
    variables={{
      bookId: params.bookId,
    }}
    fetchPolicy={'cache-and-network'}
  >
    {
      ({ loading, error, data }) => {
        if (loading) return <Loader />
        if (error) return null
        const game = data.tryGame
        return <TrialViewReduxContainer key={game.id} game={game} />
      }
    }
  </Query>
)

export default TrialViewContainer
