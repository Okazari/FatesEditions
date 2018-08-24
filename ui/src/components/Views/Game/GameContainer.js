import { connect } from 'react-redux'
import Game from './Game'

const mapStateToProps = ({ ui: { panelIsOpen } }) => ({ panelIsOpen })

export default connect(mapStateToProps)(Game)
