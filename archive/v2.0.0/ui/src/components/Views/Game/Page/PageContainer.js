import { connect } from 'react-redux'
import {
  compose,
  withStateHandlers,
  withPropsOnChange,
} from 'recompose'
import Page from './Page'

const mapStateToProps = ({
  game,
}) => ({
  page: game.book.page[game.currentPageId],
})

const PageContainer = compose(
  withStateHandlers(
    {
      newPage: false,
    },
    {
      onPageDisplayed: () => () => ({ newPage: true }),
      onPageAged: () => () => ({ newPage: false }),
    },
  ),
  withPropsOnChange(
    (props, nextProps) => props.page.id !== nextProps.page.id,
    ({ onPageDisplayed, resetScrolling }) => {
      onPageDisplayed()
      resetScrolling()
    },
  ),
  withPropsOnChange(
    (props, nextProps) => !props.newPage && nextProps.newPage,
    ({ onPageAged }) => setTimeout(onPageAged, 300),
  ),
)(Page)

export default connect(mapStateToProps)(PageContainer)
