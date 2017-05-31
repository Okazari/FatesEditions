import React from 'react'
import debounce from 'lodash.debounce'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../../common/Box'
import { Button } from '../../../common'
import TransitionRow from './TransitionRow'
import styles from './styles.scss'

class PageTransition extends React.Component {

  constructor(props) {
    super(props)
    const { page, updateResource, debounceTime } = this.props
    this.state = {
      transitions: [],
    }

    this.debounceUpdate = debounce(
      () => updateResource(page, false), debounceTime || 1000,
    )
  }

  componentDidMount() {
    const { transitions } = this.props.page
    //eslint-disable-next-line
    this.setState({ transitions })
  }

  componentDidUpdate(prevProps) {
    const { transitions } = this.props.page
    if (prevProps.page.transitions !== transitions) {
      //eslint-disable-next-line
      this.setState({ transitions })
    }
  }

  addTransition = () => {
    const { page } = this.props
    const { transitions } = this.state
    this.setState({ transitions: transitions.concat({
      fromPage: page._id,
      conditions: [],
      effects: [],
    }) })
  }

  removeTransition = (index) => {
    const { page } = this.props
    const { transitions } = this.state
    transitions.splice(index, 1)
    page.transitions = transitions
    this.setState({ transitions })
    this.debounceUpdate()
  }

  updatePage = () => {
    const { page } = this.props
    const { transitions } = this.state
    page.transitions = transitions
    this.debounceUpdate()
  }

  render() {
    const { bookId, page, postResource } = this.props
    const { transitions } = this.state

    return !page ? null : (
      <div>
        <Box className="box-primary">
          <BoxHeader withBorder>
            <h3 className="box-title">Transitions</h3>
          </BoxHeader>
          <BoxBody className={styles.transition}>
            {transitions.map((transition, index) =>
              <TransitionRow
                transition={transition}
                index={index}
                bookId={bookId}
                currentPageId={page._id}
                postResource={postResource}
                updateResource={this.updatePage}
                removeTransition={this.removeTransition}
              />)}
          </BoxBody>
          <BoxFooter className="align-center">
            <Button className="md-whiteframe-z1" domProps={{ onClick: this.addTransition }}>
              {'Ajouter une transition'}
            </Button>
          </BoxFooter>
        </Box>
      </div>
    )
  }
}

export default PageTransition
