//eslint-disable-next-line
import DraftStats from './DraftStats'
import connect from '../common/CRUDConnector'

const core = `
  id
  stats {
    id
    name
    description
    visible
    initValue
    min
    max
  }
`

export default connect('Stat', core)(DraftStats)
