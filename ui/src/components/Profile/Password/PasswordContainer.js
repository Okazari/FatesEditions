//eslint-disable-next-line
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Password from './Password'

const query = gql`
  query {
  }
`

export default graphql(query, {
  options: {
    pollInterval: 60*1000,
  },
  props: () => ({}),
})(Password)
