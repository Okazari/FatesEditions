import React from 'react'
import { Button, Icon, ButtonIcon, SelectInput, TextAreaInput } from 'components/common'
import { RouteService } from 'services'
import { Box, BoxHeader, BoxBody } from 'components/common/Box'
import TransitionCondition from './TransitionCondition'
import TransitionEffect from './TransitionEffect'
import styles from './styles.scss'

const TransitionRow = ({
  book,
  pageId,
  transition,
  index,
  addEffect,
  removeEffect,
  addCondition,
  removeCondition,
  updateTransition,
  updateResource,
  removeTransition,
}) => {
  const doRemoveTransition = () => removeTransition(transition.id)
  const createPage = () => {
    // postResource({ bookId: book.id, page: { transitions: [{ fromPage: pageId }] } })
    //   .then(page => RouteService.goTo(RouteService.routes.writebookpage(book.id, page.id)))
  }

  const editPage = () => {
    RouteService.goTo(RouteService.routes.writebookpage(book.id, transition.toPage))
  }


  const linkButton = (
    <Button
      className={styles.panelButton}
      domProps={{ onClick: createPage }}
    >
      <Icon className="fa fa-plus" />
      Créer et lier la nouvelle page
    </Button>
  )

  const goButton = (
    <Button
      className={styles.panelButton}
      domProps={{ onClick: editPage }}
    >
      <i className="fa fa-pencil" />
      Editer la page de destination
    </Button>
  )

  const renderButton = () => {
    if (transition.toPage === 'newPage') {
      return linkButton
    }
    return goButton
  }

  return !!book && (
    <Box className="box-default md-whiteframe-z1 box-solid">
      <BoxHeader withBorder >
        <div className={styles.component}>
          <div className={styles.panel}>
            <span>Page de destination</span>
            {
              renderButton()
            }
            <ButtonIcon
              className={styles.deleteTransition}
              icon="delete"
              domProps={{ onClick: doRemoveTransition }}
            />
          </div>
          <SelectInput
            className={styles.destPage}
            debounce={1}
            domProps={{
              value: transition.toPage,
              onChange: toPage => updateTransition({
                toPage: toPage !== 'newPage' ? toPage : null,
              }),
            }}
          >
            <option value="newPage">-- Vers une nouvelle page --</option>
            {book.pages.map(page => <option value={page.id} key={page.id}>{page.title}</option>)}
          </SelectInput>
        </div>
      </BoxHeader>
      <BoxBody className={styles.body}>
        <TextAreaInput
          debounce={500}
          domProps={{
            value: transition.text,
            onChange: text => updateTransition({ text }),
            placeholder: 'Texte de la transition',
          }}
        />
        <TransitionCondition
          book={book}
          pageId={pageId}
          transition={transition}
          index={index}
        />
        <TransitionEffect
          book={book}
          pageId={pageId}
          transition={transition}
          index={index}
          updateResource={updateResource}
        />
      </BoxBody>
    </Box>
  )
}

export default TransitionRow
