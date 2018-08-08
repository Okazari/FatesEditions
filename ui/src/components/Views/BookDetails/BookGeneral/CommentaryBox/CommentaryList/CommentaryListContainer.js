import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Loader } from 'components/common'
import CommentaryList from './CommentaryList'

const query = gql`
  query commentsList($bookId: ID!) {
    book(id: $bookId){
      id
      commentaries {
        id
        text
        lastModificationDate
        creationDate
        author {
          id
          username
        }
      }
    }
  }
`

const CommentaryListContainer = (props) => {
  const { bookId } = props
  return (
    <Query
      query={query}
      variables={{
        bookId
      }}
    >
      {
        ({ loading, error, data }) => {
          if (loading) return <Loader />
          if (error) return null
          const { book: { commentaries } } = data
          return <CommentaryList {...props} list={commentaries} />
        }
      }
    </Query>
  )
}

export default CommentaryListContainer
