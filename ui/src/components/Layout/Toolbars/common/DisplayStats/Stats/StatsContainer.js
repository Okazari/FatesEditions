import { connect } from 'react-redux'
import Stats from './Stats'

const mapStateToProps = ({ game }, { id, value }) => ({
  stat: game.book.stat[id],
  value,
})

export default connect(mapStateToProps)(Stats)
