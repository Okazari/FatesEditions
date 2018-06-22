import { connect } from 'react-redux'
import DisplayObjects from './DisplayObjects'

const mapStateToProps = ({ game }) => ({
  objects: game.objects,
})

export default connect(mapStateToProps)(DisplayObjects)
