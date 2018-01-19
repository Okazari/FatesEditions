import DraftPages from './DraftPages'
import connect from '../common/CRUDConnector'

const core = `
  id
  pages {
    id
    title
    description
  }
`

export default connect('Page', core)(DraftPages)
