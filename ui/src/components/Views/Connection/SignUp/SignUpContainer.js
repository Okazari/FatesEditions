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
      (signUp, state) => {
        const { data } = state
        if (data) {
          AuthService.setToken(data.signUp)
          RouteService.goTo(RouteService.routes.home())
        }
        const _signUp = signUpData => console.log('data:', signUpData) || signUp({
          variables: {
            ...signUpData,
          },
        })
        return <SignUp signUp={_signUp} state={state} />
      }
    }
  </Mutation>
)

export default SignUpContainer