import { connect } from 'react-redux'
import Stats from './Stats'

const mapStateToProps = ({ game }, { id, value }) => ({
  name: game.book.stat[id].name,
  value,
})

export default connect(mapStateToProps)(Stats)
