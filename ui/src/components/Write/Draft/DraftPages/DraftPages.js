import React from 'react'
// import { RouteService } from 'services'
import { Button, ButtonIcon, DataTable } from 'components/common'
import PageRow from './PageRow'
import styles from './styles.scss'

const headers = [
  { type: <ButtonIcon domProps={{ disabled: true }} icon="mode_edit" />, key: 'edit', className: styles.small },
  { type: 'Titre', key: 'title' },
  { type: 'Mémo', key: 'description', className: styles.large },
  { type: <ButtonIcon domProps={{ disabled: true }} icon="delete" />, key: 'delete', className: styles.small },
]

const DraftPages = ({ book = { pages: [] }, disabled, addPage, removePage }) => {
  return (
    <div className={styles.component}>
      <DataTable className="table-hover" headers={headers}>
        {
          book.pages.map(page =>
            <PageRow
              page={page}
              key={page.id}
              bookId={book.id}
              disabled={disabled}
              removePage={removePage}
            />,
          )
        }
      </DataTable>
      <Button domProps={{ onClick: addPage, disabled }}>
        Ajouter une page
      </Button>
    </div>
  )
}

export default DraftPages
