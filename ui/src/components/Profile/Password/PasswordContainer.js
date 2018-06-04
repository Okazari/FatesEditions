//eslint-disable-next-line
import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Password from './Password'
import AuthService from '../../../services/AuthService'

const mutation = gql`
  mutation updatePassword(
      $userId: ID!,
      $oldPassword: String!,
      $newPassword: String!,
      $confirmation: String!
  ) {
    updatePassword(
      userId: $userId,
      oldPassword: $oldPassword,
      newPassword: $newPassword,
      confirmation: $confirmation
    ) {
      id
    }
  }
`
const mutationOptions = {
  name: 'updatePassword',
}

const PasswordContainer = (props) => {
  const { updatePassword } = props
  const _updatePassword = passwordsData => updatePassword({
    variables: {
      userId: AuthService.getConnectedUserId(),
      ...passwordsData,
    },
  })
  return <Password {...props} updatePassword={_updatePassword} />
}

export default graphql(mutation, mutationOptions)(PasswordContainer)
