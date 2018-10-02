import React from 'react'
import { WideButton, ButtonIcon, DataTable, AnimatedList } from 'components/common'
import PageRow from './PageRow'
import styles from './styles.scss'

const headers = [
  { type: <ButtonIcon domProps={{ disabled: true }} icon="mode_edit" />, key: 'edit', className: styles.small },
  { type: 'Titre', key: 'title' },
  { type: 'Mémo', key: 'description', className: styles.large },
  { type: <ButtonIcon domProps={{ disabled: true }} icon="delete" />, key: 'delete', className: styles.small },
]

const DraftPages = ({ book = { pages: [] }, disabled, addPage, removePage, updatePage }) => {
  return (
    <div className={styles.component}>
      <WideButton
        domProps={{ onClick: addPage, disabled }}
      >
        Ajouter une page
      </WideButton>
      <DataTable className="table-hover" headers={headers}>
        <AnimatedList list={book.pages}>
          {
            page => <PageRow
              page={page}
              bookId={book.id}
              disabled={disabled}
              removePage={removePage}
              updatePage={updatePage}
            />
          }
        </AnimatedList>
      </DataTable>
    </div>
  )
}

export default DraftPages
