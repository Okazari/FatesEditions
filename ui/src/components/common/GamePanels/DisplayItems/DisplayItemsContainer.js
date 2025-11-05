import { connect } from 'react-redux'
import DisplayItems from './DisplayItems'

const mapStateToProps = ({ game }) => ({
  items: game.objects,
})

export default connect(mapStateToProps)(DisplayItems)
