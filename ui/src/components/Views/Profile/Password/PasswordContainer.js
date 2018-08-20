import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Password from './Password'

const mutation = gql`
  mutation updatePassword(
      $oldPassword: String!,
      $newPassword: String!,
      $confirmation: String!
  ) {
    updatePassword(
      oldPassword: $oldPassword,
      newPassword: $newPassword,
      confirmation: $confirmation
    ) {
      id
    }
  }
`

const PasswordContainer = () => (
  <Mutation mutation={mutation}>
    {
      (updatePassword, { loading, error, data }) => {
        const _updatePassword = passwordsData => updatePassword({
          variables: {
            ...passwordsData,
          },
        })
        return (<Password
          updatePassword={_updatePassword}
          error={error.graphQLErrors[0].message || ''}
          success={data}
          loading={loading}
        />)
      }
    }
  </Mutation>
)

export default PasswordContainer
