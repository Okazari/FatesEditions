import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { RollTable } from 'components/Views/Write/Page/common'

const core = `
  id
  rolls {
    id
    min
    max
    modifier
    stat
  }
`

const addRollMutation = gql`
  mutation addRoll(
    $bookId: ID!,
    $pageId: ID!,
  ) {
    createPageRoll(
      bookId: $bookId,
      pageId: $pageId,
    ) {
      ${core}
    }
  }
`

const updateRollMutation = gql`
  mutation updateRoll(
    $bookId: ID!,
    $pageId: ID!,
    $roll: RollInput!,
  ) {
    updatePageRoll(
      bookId: $bookId,
      pageId: $pageId,
      roll: $roll,
    ) {
      id
      min
      max
      modifier
      stat
    }
  }
`

const removeRollMutation = gql`
  mutation removeRoll(
    $bookId: ID!,
    $pageId: ID!,
    $rollId: ID!,
  ) {
    deletePageRoll(
      bookId: $bookId,
      pageId: $pageId,
      rollId: $rollId,
    ) {
      ${core}
    }
  }
`

const RollTableContainer = (props) => {
  const { book, pageId } = props
  return (
    <Mutation mutation={addRollMutation}>
      {(addRoll) => {
        const _addRoll = () => addRoll({
          variables: {
            pageId,
            bookId: book.id,
          },
        })
        return (
          <Mutation mutation={removeRollMutation}>
            {(removeRoll) => {
              const _removeRoll = rollId => removeRoll({
                variables: {
                  rollId,
                  pageId,
                  bookId: book.id,
                },
              })
              return (
                <Mutation mutation={updateRollMutation}>
                  {
                    (updateRoll) => {
                      const _updateRoll = roll => updateRoll({
                        variables: {
                          roll,
                          pageId,
                          bookId: book.id,
                        },
                      })
                      return (
                        <RollTable
                          {...props}
                          addRoll={_addRoll}
                          removeRoll={_removeRoll}
                          updateRoll={_updateRoll}
                        />
                      )
                    }
                  }
                </Mutation>
              )
            }}
          </Mutation>
        )
      }}
    </Mutation>
  )
}

export default RollTableContainer
