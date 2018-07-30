import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService, RouteService } from 'services'
import SignIn from './SignIn'

const mutation = gql`
  mutation signIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password)
  }
`

const SignInContainer = () => (
  <Mutation mutation={mutation}>
    {
      (signIn, state) => {
        const { data } = state
        if (data) {
          AuthService.setToken(data.signIn)
          RouteService.goTo(RouteService.routes.home())
        }
        const _signIn = signInData => signIn({
          variables: {
            ...signInData,
          },
        })
        return <SignIn signIn={_signIn} state={state} />
      }
    }
  </Mutation>
)

export default SignInContainer