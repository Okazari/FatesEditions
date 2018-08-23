import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService, RouteService } from 'services'
import SignUp from './SignUp'

const mutation = gql`
  mutation signUp(
    $username: String!,
    $email: String!,
    $password: String!,
    $confirmation: String!,
  ) {
    signUp(
      username: $username,
      email: $email,
      password: $password,
      confirmation: $confirmation,
    ),
  }
`

const SignUpContainer = () => (
  <Mutation mutation={mutation}>
    {
      (signUp, { loading, error }) => {
        const _signUp = signUpData => signUp({
          variables: {
            ...signUpData,
          },
        }).then(({ data }) => {
          AuthService.setToken(data.signUp)
          RouteService.goTo(RouteService.routes.home())
        })
        return (<SignUp
          signUp={_signUp}
          loading={loading}
          error={error}
        />)
      }
    }
  </Mutation>
)

export default SignUpContainer
