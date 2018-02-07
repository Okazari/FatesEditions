import React from 'react'
import { Button, ButtonIcon, SelectInput, TextAreaInput } from 'components/common'
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
  addPage,
  onLinkNewPage,
  removeTransition,
}) => {
  const doRemoveTransition = () => removeTransition(transition.id)

  const editPage = () => {
    RouteService.goTo(RouteService.routes.writebookpage(book.id, transition.toPage))
  }

  const linkButton = (
    <Button
      className={styles.panelButton}
      domProps={{ onClick: onLinkNewPage }}
    >
      Créer et lier la nouvelle page
    </Button>
  )

  const goButton = (
    <Button
      className={styles.panelButton}
      domProps={{ onClick: editPage }}
    >
      Editer la page de destination
    </Button>
  )

  const renderButton = () => {
    if (transition.toPage === '' || transition.toPage === null) {
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
            domProps={{
              value: transition.toPage,
              onChange: toPage => updateTransition({
                toPage,
              }),
            }}
          >
            <option value="">-- Vers une nouvelle page --</option>
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
