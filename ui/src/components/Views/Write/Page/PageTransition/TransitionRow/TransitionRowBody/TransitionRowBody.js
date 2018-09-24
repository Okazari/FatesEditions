import React from 'react'
import { RouteService } from 'services'
import { WideButton, SelectInput } from 'components/common'
import ConditionTable from './ConditionTable'
import EffectTable from './EffectTable'
import RollTable from './RollTable'
import styles from './style.scss'

const TransitionRowBody = ({
  hostRef,
  book,
  pageId,
  transition,
  index,
  updateTransition,
  onLinkNewPage,
}) => {
  const editPage = () => {
    RouteService.goTo(RouteService.routes.writebookpage(book.id, transition.toPage))
  }

  const linkButton = (
    <WideButton
      domProps={{ onClick: onLinkNewPage }}
    >
      Créer et lier la nouvelle page
    </WideButton>
  )

  const goButton = (
    <WideButton
      domProps={{ onClick: editPage }}
    >
      Editer la page de destination
    </WideButton>
  )

  const renderButton = () => {
    if (transition.toPage === '' || transition.toPage === null) {
      return linkButton
    }
    return goButton
  }

  return (
    <div
      className={styles.component}
      ref={hostRef}
    >
      <div className={styles.destination}>
        <span>Page de destination</span>
        <div className={styles.destinationRow}>
          <SelectInput
            className={styles.selectPage}
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
          {
            renderButton()
          }
        </div>
      </div>
      <ConditionTable
        book={book}
        pageId={pageId}
        transition={transition}
        index={index}
        updateTransition={updateTransition}
      />
      <EffectTable
        book={book}
        pageId={pageId}
        transition={transition}
        effects={transition.effects}
        index={index}
      />
      <RollTable
        book={book}
        pageId={pageId}
        transition={transition}
        rolls={transition.rolls}
        index={index}
      />
    </div>
  )
}

export default TransitionRowBody
