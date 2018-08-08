import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Commentary from './Commentary'

const mutation = gql`
  mutation deleteComment($bookId: ID! $commentId: ID!) {
    deleteComment(bookId: $bookId, commentId: $commentId){
      id
      commentaries {
        id
      }
    }
  }
`

const CommentaryContainer = (props) => {
  const { bookId } = props
  console.log(bookId)
  return (
    <Mutation mutation={mutation}>
      {
        (deleteComment, state) => {
          const _deleteComment = comment => deleteComment({
            variables: {
              bookId,
              ...comment,
            },
          })
          return <Commentary {...props} deleteComment={_deleteComment} state={state} />
        }
      }
    </Mutation>
  )
}

export default CommentaryContainer
