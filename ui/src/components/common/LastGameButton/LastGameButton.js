import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { RouteService } from 'services'
import { Button } from 'components/common'
import styles from './style.scss'

const query = gql`
  query lastGame($bookId: ID!){
    lastGame(bookId: $bookId) {
      id
      lastModificationDate
    }
  }
`

const LastGameButton = ({ book }) => {
  return (
    <Query
      query={query}
      variables={{
        bookId: book.id,
      }}
      fetchPolicy={'network-only'}
    >
      {
        ({ loading, error, data }) => {
          let className = styles.disabled
          let onClick = () => null
          if (error) return null
          if (data && data.lastGame && data.lastGame.id) {
            className = styles.abled
            onClick = () => RouteService.goTo(RouteService.routes.playgame(data.lastGame.id))
          }
          return (
            <Button
              domProps={{
                onClick,
              }}
              className={className}
            >
              Reprendre
            </Button>
          )
        }
      }
    </Query>
  )
}

export default LastGameButton
