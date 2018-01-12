//eslint-disable-next-line
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import DraftGeneral from './DraftGeneral'

const query = gql`

  query BookById ($id: ID!) {
    book(id: $id) {
      id
      name
      cover
      authorId
      genreId
      synopsis
      startingPageId
      pages {
        id
        title
      }
      stats {
        id
        initValue
      }
    }
  }
`

const queryOptions = {
  options: ({ params }) => ({
    variables: {
      id: params.draftId,
    },
  }),
  props: ({ data: { book }, ...rest }) => ({
    ...rest,
    draft: book,
  }),
}

const mutation = gql`
  mutation updateBook($book: BookInput!) {
    updateBook(book: $book) {
      id
      name
      cover
      authorId
      genreId
      synopsis
      startingPageId
    }
  }
`

const mutationOptions = {
  name: 'updateBook',
}

export default compose(
  graphql(query, queryOptions),
  graphql(mutation, mutationOptions),
)(DraftGeneral)
