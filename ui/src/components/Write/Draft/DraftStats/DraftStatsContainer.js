//eslint-disable-next-line
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import DraftStats from './DraftStats'

const core = `
  id
  stats {
    id
    name
    description
    visible
    initValue
    min
    max
  }
`

const query = gql`
  query BookById ($id: ID!) {
    book(id: $id) {
      ${core}
    }
  }
`

const queryOptions = {
  options: ({ params }) => ({
    variables: {
      id: params.draftId,
    },
  }),
  props: ({ data: { book } }) => ({
    book,
  }),
}

const addMutation = gql`
  mutation addStat($bookId: ID!) {
    createStat(bookId: $bookId) {
      ${core}
    }
  }
`

const addMutationOptions = {
  name: 'addStat',
}

const removeMutation = gql`
  mutation removeStat($bookId: ID!, $statId: ID!) {
    deleteStat(bookId: $bookId, statId: $statId) {
      ${core}
    }
  }
`

const removeMutationOptions = {
  name: 'removeStat',
}

const updateMutation = gql`
  mutation updateStat($bookId: ID!, $stat: StatInput!) {
    updateStat(bookId: $bookId, stat: $stat) {
      ${core}
    }
  }
`

const updateMutationOptions = {
  name: 'updateStat',
}

export default compose(
  graphql(query, queryOptions),
  graphql(addMutation, addMutationOptions),
  graphql(removeMutation, removeMutationOptions),
  graphql(updateMutation, updateMutationOptions),
)(DraftStats)
