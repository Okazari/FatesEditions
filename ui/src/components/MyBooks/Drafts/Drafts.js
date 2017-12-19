import React from 'react'
import classnames from 'classnames'
import styles from './style.scss'
import Draft from '../../common/Draft'
import { Icon } from '../../common'
import { RouteService } from '../../../services'

const editDraft = (draftId) => {
  RouteService.goTo(RouteService.routes.writebook(draftId))
}

const Drafts = ({ drafts, postResource, deleteResource }) => {
  const onCreateDraft = () => {
    postResource({}).then((draft) => {
      const { _id } = draft
      editDraft(_id)
    })
  }
  const onDeleteDraft = (id) => {
    deleteResource(id)
  }
  const nbColumns = document && Math.floor((document.body.clientWidth - 200) / 240)
  // TODO Replace with loader
  if (!drafts) return null
  return (
    <div className={styles.list}>
      <div onClick={onCreateDraft} className={classnames(styles.book, styles.newBook)}>
        <Icon icon="add" />
      </div>
      {
        drafts.map((draft, index) => {
          const usedIndex = index + 1
          const delay = 100 * ((usedIndex % nbColumns) + Math.floor(usedIndex / nbColumns))
          return (
            <div
              key={draft}
              className={styles.book}
            >
              <div className={styles.delete}>
                <Icon
                  icon="delete_forever"
                  domProps={{
                    className: styles.action,
                    onClick: () => onDeleteDraft(draft),
                  }}
                />
              </div>
              <Draft showDelay={delay} draftId={draft} onClick={() => editDraft(draft)} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Drafts
