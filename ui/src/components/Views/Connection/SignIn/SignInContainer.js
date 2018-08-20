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
      (signIn, { loading, error }) => {
        const _signIn = signInData => signIn({
          variables: {
            ...signInData,
          },
        }).then(({ data }) => {
          AuthService.setToken(data.signIn)
          RouteService.goTo(RouteService.routes.home())
        })
        return (<SignIn
          signIn={_signIn}
          loading={loading}
          error={error}
        />)
      }
    }
  </Mutation>
)

export default SignInContainer
