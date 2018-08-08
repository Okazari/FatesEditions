import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import CommentaryInput from './CommentaryInput'

const mutation = gql`
  mutation addComment($bookId: ID! $text: String!) {
    addComment(bookId: $bookId, text: $text){
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

const CommentaryInputContainer = ({ bookId }) => (
  <Mutation mutation={mutation}>
    {
      (addComment, state) => {
        const _addComment = comment => addComment({
          variables: {
            bookId,
            ...comment,
          },
        })
        return <CommentaryInput addComment={_addComment} state={state} />
      }
    }
  </Mutation>
)

export default CommentaryInputContainer
