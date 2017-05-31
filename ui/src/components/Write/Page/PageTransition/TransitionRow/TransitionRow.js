import React from 'react'
import { browserHistory } from 'react-router'
import { Button, SelectInput, TextAreaInput } from '../../../../common'
import { Box, BoxHeader, BoxBody } from '../../../../common/Box'
import TransitionCondition from './TransitionCondition'
import TransitionEffect from './TransitionEffect'
import styles from './styles.scss'

class TransitionRow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedPage: 'new',
      effects: [],
    }
  }

  updateTransition = (transition) => {
    const { updateResource } = this.props
    this.setState({ selectedPage: transition.toPage })
    if (transition.toPage !== 'new') {
      updateResource()
    }
  }

  createPage = () => {
    const { bookId, currentPageId, postResource } = this.propsk
    postResource({ bookId, page: { transitions: [{ toPage: currentPageId }] } })
      .then(page => browserHistory.push(`/app/write/book/${bookId}/page/${page._id}`))
  }

  editPage = (pageId) => {
    const { bookId } = this.props
    browserHistory.push(`/app/write/book/${bookId}/page/${pageId}`)
  }

  render() {
    const { book, index, transition, bookId, removeTransition } = this.props
    const { selectedPage } = this.state

    return !book ? null : (
      <Box className="box-default md-whiteframe-z1 box-solid">
        <BoxHeader withBorder >
          <div className={styles.component}>
            <div className={styles.panel}>
              <span>Page de destination</span>
              {selectedPage === 'new' ?
                <Button className={styles.panelButton} domProps={{ onClick: this.createPage }}><i className="fa fa-plus" />Créer et lier la nouvelle page</Button> :
                <Button className={styles.panelButton} domProps={{ onClick: () => this.editPage(selectedPage) }}><i className="fa fa-pencil" />Editer la page de destination</Button>
              }
              <Button
                className={styles.deleteTransition}
                domProps={{ onClick: () => removeTransition(index) }}
              >
                <i className="fa fa-times" />
              </Button>
            </div>
            <SelectInput
              className={styles.destPage}
              resource={transition}
              resourceHandler={this.updateTransition}
              domProps={{ name: 'toPage' }}
              debounceTime={1}
            >
              <option value="new" selected>-- Vers une nouvelle page --</option>
              {book.pages.map(page => <option value={page._id}>{page.title}</option>)}
            </SelectInput>
          </div>
        </BoxHeader>
        <BoxBody className={styles.body}>
          <TextAreaInput
            resource={transition}
            resourceHandler={this.updateTransition}
            domProps={{ name: 'text', placeholder: 'Texte de la transition' }}
          />
          <TransitionCondition
            transition={transition}
            updateResource={this.updateTransition}
            bookId={bookId}
          />
          <TransitionEffect
            transition={transition}
            updateResource={this.updateTransition}
            bookId={bookId}
          />
        </BoxBody>
      </Box>
    )
  }
}

export default TransitionRow
