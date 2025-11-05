import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import DraftStats from './DraftStats'

const coreStat = `
  id
  name
  description
  visible
  initValue
  min
  max
  icon
`

const core = `
  id
  stats {
    ${coreStat}
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
      ${coreStat}
    }
  }
`

const updateMutationOptions = {
  name: 'updateStat',
}

const DraftStatsContainer = (props) => {
  const { book, addStat, removeStat, updateStat } = props
  const _addStat = () => addStat({ variables: { bookId: book.id } })
  const _removeStat = stat => removeStat({ variables: { bookId: book.id, statId: stat.id } })
  const _updateStat = stat => updateStat({ variables: { bookId: book.id, stat } })
  return (
    <DraftStats
      {...props}
      removeStat={_removeStat}
      updateStat={_updateStat}
      addStat={_addStat}
    />
  )
}

export default compose(
  graphql(query, queryOptions),
  graphql(addMutation, addMutationOptions),
  graphql(removeMutation, removeMutationOptions),
  graphql(updateMutation, updateMutationOptions),
)(DraftStatsContainer)
