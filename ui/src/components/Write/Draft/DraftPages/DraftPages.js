import React from 'react'
import { RouteService } from 'services'
import { Button, ButtonIcon, DataTable } from 'components/common'
import PageRow from './PageRow'
import styles from './styles.scss'

const headers = [
  { type: <ButtonIcon domProps={{ disabled: true }} icon="mode_edit" />, key: 'edit' },
  { type: 'Titre', key: 'title' },
  { type: 'Description', key: 'description' },
  { type: <ButtonIcon domProps={{ disabled: true }} icon="delete" />, key: 'delete' },
]

const DraftPages = ({ pages = [], query, disabled, postResource, deleteResource }) => {
  const createPage = () => {
    postResource({ ...query, page: {} }).then((page) => {
      RouteService.goTo(RouteService.routes.writebookpage(query.bookId, page._id))
    })
  }

  return (
    <div className={styles.component}>
      <DataTable className="table-hover" headers={headers}>
        {
          pages.map(page =>
            <PageRow
              pageId={page}
              key={page}
              disabled={disabled}
              bookId={query.bookId}
              deleteResource={deleteResource}
            />,
          )
        }
      </DataTable>
      <Button domProps={{ onClick: createPage, disabled }}>
        Ajouter une page
      </Button>
    </div>
  )
  // <DraftPage query={{ bookId: draft._id }} />
}

export default DraftPages
