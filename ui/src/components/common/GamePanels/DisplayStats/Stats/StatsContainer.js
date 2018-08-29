import { connect } from 'react-redux'
import { withStateHandlers } from 'recompose'
import Stats from './Stats'

const mapStateToProps = ({ game }, { id, value }) => ({
  stat: game.book.stat[id],
  value,
})

const StatsContainer = withStateHandlers(
  {
    descriptrionVisible: false,
  },
  {
    toggleDescription: ({ descriptionVisible }) =>
      () => ({ descriptionVisible: !descriptionVisible }),
  },
)(Stats)

export default connect(mapStateToProps)(StatsContainer)
