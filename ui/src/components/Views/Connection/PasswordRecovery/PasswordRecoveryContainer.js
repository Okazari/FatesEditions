import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import PasswordRecovery from './PasswordRecovery'

const mutation = gql`
  mutation passwordRecovery($email: String!) {
    passwordRecovery(email: $email)
  }
`

const PasswordRecoveryContainer = () => (
  <Mutation mutation={mutation}>
    {
      (recoverPassword, { loading, error }) => {
        const _recoverPassword = email => recoverPassword({
          variables: {
            ...email,
          },
        })
        return (
          <PasswordRecovery
            recoverPassword={_recoverPassword}
            loading={loading}
            error={error}
          />
        )
      }
    }
  </Mutation>
)

export default PasswordRecoveryContainer