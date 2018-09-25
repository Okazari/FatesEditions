import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { WideButton, ButtonIcon, DataTable } from 'components/common'
import { dataRow } from 'styles/reactPoseAnimation'
import PageRow from './PageRow'
import styles from './styles.scss'

const AnimatedPageRow = posed.div(dataRow)

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
        // className={styles.button}
      >
        Ajouter une page
      </WideButton>
      <DataTable className="table-hover" headers={headers}>
        <PoseGroup>
          {
            book.pages.map(page => (
              <AnimatedPageRow key={page.id}>
                <PageRow
                  page={page}
                  key={page.id}
                  bookId={book.id}
                  disabled={disabled}
                  removePage={removePage}
                  updatePage={updatePage}
                />
              </AnimatedPageRow>
            ))
          }
        </PoseGroup>
      </DataTable>
    </div>
  )
}

export default DraftPages
