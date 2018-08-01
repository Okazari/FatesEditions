import React from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Publish from './Publish'

const query = gql`
  query Author {
    author {
      id
      drafts {
        id
        name
        startingPageId
        cover
        author {
          id
          username
        }
      }
    }
  }
`

const mutation = gql`
  mutation publishBook($id: ID!) {
    publishBook(id: $id) {
      id
      publications {
        id
      }
      drafts {
        id
      }
    }
  }
`

const PublishContainer = props => (
  <Query
    query={query}
    fetchPolicy={'cache-and-network'}
  >
    {
      ({ data: { author } }) => (
        <Mutation
          mutation={mutation}
        >
          {
            (publishBook, { error }) => {
              const _publishBook = id => publishBook({
                variables: {
                  id,
                },
              })
              return <Publish {...props} author={author} error={error} publishBook={_publishBook} />
            }
          }
        </Mutation>
      )
    }
  </Query>
)

export default PublishContainer
