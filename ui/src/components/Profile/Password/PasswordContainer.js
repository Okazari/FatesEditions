//eslint-disable-next-line
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Password from './Password'
import AuthService from '../../services/AuthService'

const mutation = gql`
  mutation updatePassword($userId, $passwords) {
    updatePassword(userId: $userId, passwords: $passwords) {

    }
  }
`
const mutationOptions = {
  name: 'updatePassword',
}

const PasswordContainer = (props) => {
  const { updatePassword } = props
  const _updatePassword = passwords => updatePassword({
    variables: {
      userId: getUserId(),
      ...passwords,
    },
  })
  return <Password {...props} updatePassword={_updatePassword} />
}

export default graphql(mutation, mutationOptions)(PasswordContainer)
