import React from 'react'
import { Mutation } from 'react-apollo'
import { withStateHandlers } from 'recompose'
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

const CommentaryInputContainer = withStateHandlers(
  {
    comment: '',
  },
  {
    onCommentChange: () => comment => ({ comment }),
    onSubmit: ({ comment }, { addComment }) => (e) => {
      e.preventDefault()
      addComment(comment)
      return {
        comment: '',
      }
    },
  },
)(CommentaryInput)

const CommentaryInputContainerGQL = ({ bookId, ...props }) => (
  <Mutation mutation={mutation}>
    {
      (addComment, { loading, error }) => {
        const _addComment = comment => addComment({
          variables: {
            bookId,
            text: comment,
          },
        })
        return (
          <CommentaryInputContainer
            {...props}
            addComment={_addComment}
            loading={loading}
            error={error && error.graphQLErrors[0].message}
          />
        )
      }
    }
  </Mutation>
)

export default CommentaryInputContainerGQL
