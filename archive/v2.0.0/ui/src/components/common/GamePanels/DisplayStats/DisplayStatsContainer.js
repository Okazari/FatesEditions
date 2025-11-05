import { connect } from 'react-redux'
import DisplayStats from './DisplayStats'

const mapStateToProps = ({ game }) => ({ stats: game.stats })

export default connect(mapStateToProps)(DisplayStats)
