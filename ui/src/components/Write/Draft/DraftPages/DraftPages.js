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

const DraftPages = ({
  pages = [],
  params: { draftId },
  disabled,
  postResource,
  deleteResource,
}) => {
  const createPage = () => {
    // postResource({ ...query, page: {} }).then((page) => {
    //   RouteService.goTo(RouteService.routes.writebookpage(draftId, page._id))
    // })
  }

  return (
    <div className={styles.component}>
      <DataTable className="table-hover" headers={headers}>
        {
          pages.map(page =>
            <PageRow
              page={page}
              key={page.id}
              disabled={disabled}
              bookId={draftId}
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
}

export default DraftPages
