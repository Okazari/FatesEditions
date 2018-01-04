import React from 'react'
import classnames from 'classnames'
import { ButtonIcon, Icon, Book } from 'components/common'
import { RouteService } from 'services'
import styles from './style.scss'

const editDraft = (draftId) => {
  RouteService.goTo(RouteService.routes.writebook(draftId))
}

const Drafts = ({ data: { book }, postResource, deleteResource }) => {
  const drafts = book
  const onCreateDraft = () => {
    postResource({}).then((draft) => {
      const { _id } = draft
      editDraft(_id)
    })
  }
  const onDeleteDraft = (id) => {
    deleteResource(id)
  }
  const nbColumns = document && Math.floor((document.body.clientWidth - 100) / 240)
  // TODO Replace with loader
  if (!drafts) return null
  return (
    <div className={styles.list}>
      <div onClick={onCreateDraft} className={classnames(styles.book, styles.newBook)}>
        <Icon icon="library_add" />
      </div>
      {
        drafts.map((draft, index) => {
          const usedIndex = index + 1
          const delay = 100 * ((usedIndex % nbColumns) + Math.floor(usedIndex / nbColumns))
          return (
            <div
              key={draft.id}
              className={styles.book}
            >
              <div className={styles.delete}>
                <ButtonIcon
                  icon="delete_forever"
                  className={styles.action}
                  domProps={{
                    onClick: () => onDeleteDraft(draft.id),
                  }}
                />
              </div>
              <Book showDelay={delay} book={draft} onClick={() => editDraft(draft.id)} />
            </div>
          )
        })
      }
    </div>
  )
}

Drafts.getFragments = name => `
  fragment ${name}_book on Book {
    id
    ...commmonBook_book
  }

  ${Book.getFragments('commmonBook')}
`

export default Drafts
