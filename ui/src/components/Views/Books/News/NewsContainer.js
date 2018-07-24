import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import BookGrid from 'components/common/BookGrid'
import PlayableBook from '../common/PlayableBook'
import Showdown from './Showdown'
import styles from './style.scss'

const query = gql`
  query {
    books(draft: false) {
      id
      name
      cover
      synopsis
      author {
        id
        username
      }
    }
  }
`

const NewsContainer = () => {
  return (
    <Query
      query={query}
      pollInterval={60 * 1000}
      fetchPolicy={'network-only'}
    >
      {
        ({ data: { books } }) => {
          if (!books) return null
          const booksCopy = [...books]
          const firstBook = booksCopy.shift()
          return (
            <div className={styles.component}>
              <Showdown book={firstBook} />
              <BookGrid
                tilesList={booksCopy}
                TileComponent={PlayableBook}
              />
            </div>
          )
        }
      }
    </Query>
  )
}

export default NewsContainer
