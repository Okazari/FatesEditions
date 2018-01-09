import React from 'react'
import { Link } from 'react-router'
import { ButtonIcon, DataRow } from 'components/common'
import { RouteService } from 'services'
import styles from '../styles.scss'

const PageRow = ({ page = {}, bookId, disabled, deleteResource }) => {
  return (
    <DataRow>
      <div className={styles.small}>
        <Link to={RouteService.routes.writebookpage(bookId, page.id)}>
          <ButtonIcon
            icon="mode_edit"
            domProps={{ disabled }}
          />
        </Link>
      </div>
      <div>{page.title}</div>
      <div className={styles.large}>{page.description}</div>
      <div className={styles.small}>
        <ButtonIcon
          icon="delete"
          domProps={{ onClick: () => deleteResource(page.id), disabled }}
        />
      </div>
    </DataRow>
  )
}

export default PageRow
