//eslint-disable-next-line
import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Password from './Password'
import AuthService from '../../../services/AuthService'

const mutation = gql`
  mutation updatePassword($data: UpdatePasswordInput!) {
    updatePassword(data: $data) {
      id
    }
  }
`
const mutationOptions = {
  name: 'updatePassword',
}

const PasswordContainer = (props) => {
  const { updatePassword } = props
  const _updatePassword = passwordData => updatePassword({
    variables: {
      data: {
        userId: AuthService.getConnectedUserId(),
        ...passwordData,
      },
    },
  })
  return <Password {...props} updatePassword={_updatePassword} />
}

export default graphql(mutation, mutationOptions)(PasswordContainer)
