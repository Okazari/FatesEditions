import React from 'react'
import { Link } from 'react-router'
import { ButtonIcon, DataRow } from 'components/common'
import { RouteService } from 'services'
import styles from '../styles.scss'

const PageRow = ({ page = {}, bookId, disabled, removePage }) => {
  const deletePage = () => removePage(page)
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
      <div>{page.title || 'Page sans titre'}</div>
      <div className={styles.large}>{page.description || 'Pas de description'}</div>
      <div className={styles.small}>
        <ButtonIcon
          icon="delete"
          domProps={{ onClick: deletePage }}
        />
      </div>
    </DataRow>
  )
}

export default PageRow
