//eslint-disable-next-line
import DraftItems from './DraftItems'
import connect from '../common/CRUDConnector'

const core = `
  id
  objects {
    id
    name
    description
    atStart
    visible
  }
`

export default connect('Object', core)(DraftItems)
