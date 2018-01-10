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

// const mutation = gql`
//   mutation updateBook($book: Book!) {
//     book (id: $book) {
//       id
//     }
//   }
// `
//
// const mutationOptions = {}

export default graphql(query, queryOptions)(DraftGeneral)

// import { ApolloService } from 'services'

// ApolloService = queryTypes = {
//   book: {
//     name,
//     cover,
//   }
// }
//
// mapper = (propTypes) => {
//   queryTypespropTyps
// }
//
// graphqlQueryBuilder(mapper)(DraftGeneral)

// client.getFragment(id, fragment)
//
// const query = gql
// const resource = {
//   type: 'Book',
//   root: 'book',
//   fields:['cover', 'id', 'description', 'name']
//   queryOptions: {
//     fetchPolicy: 'network-only'
//   }
// }
//
// graphqlResource(id, resourceOptions)
//
// const query = gql`
//   query identity($id: ID!) {
//     ${resource.type} {
//       ${fields.map()}
//     }
//   }
// `
//
// const fragment = gql`
//   fragment toto on ${resource.type} {
//     ${fields.map()}
//   }
// `
// const data = client.getFragment(id, fragment)
// if(data){
//   client.setQuery(query, data)
// }
//
// graphql(query, queryOptions)(Component)
