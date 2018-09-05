import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { BookGrid, Loader } from 'components/common'
import AddNewDraft from './AddNewDraft'
import BookTile from './BookTile'

const core = `
  id
  drafts {
    id
    name
    cover
    author {
      id
      username
    }
  }
`

const query = gql`
  query Author {
    author {
      ${core}
    }
  }
`

const DraftContainer = () => {
  return (
    <Query
      query={query}
      fetchPolicy={'cache-and-network'}
    >
      {
        ({ loading, error, data }) => {
          if (loading) return <Loader />
          if (error) return null
          return (
            <BookGrid
              tilesList={data.author.drafts}
              FirstTileComponent={AddNewDraft}
              TileComponent={BookTile}
            />
          )
        }
      }
    </Query>
  )
}

export default DraftContainer
