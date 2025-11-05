import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { BookGrid, ToDetailsBook } from 'components/common'

const query = gql`
  query Author {
    author {
      id
      publications {
        id
        name
        cover
        author {
          id
          username
        }
      }
    }
  }
`

const queryOptions = {
  options: {
    fetchPolicy: 'cache-and-network',
  },
  props: ({ data: { loading, author } }) => ({
    author,
  }),
}

const BookTile = ({ showDelay, content }) => (
  <ToDetailsBook
    showDelay={showDelay}
    content={content}
  />
)

const PublicationsContainer = ({ author = {} }) => (
  <BookGrid
    tilesList={author && author.publications}
    TileComponent={BookTile}
  />
)

export default compose(
  graphql(query, queryOptions),
)(PublicationsContainer)
