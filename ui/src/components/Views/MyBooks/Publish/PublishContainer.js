import React from 'react'
import { Query } from 'react-apollo'
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

const PublishContainer = props => (
  <Query
    query={query}
    fetchPolicy={'cache-and-network'}
  >
    {
      ({ data: { author } }) => (
        <Publish {...props} author={author} />
      )
    }
  </Query>
)

export default PublishContainer
