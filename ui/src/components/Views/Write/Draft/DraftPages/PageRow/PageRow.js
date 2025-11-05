import React from 'react'
import { Link } from 'react-router'
import { ButtonIcon, Input, DataRow } from 'components/common'
import { RouteService } from 'services'
import styles from '../styles.scss'

const PageRow = ({ page = {}, bookId, disabled, removePage, updatePage }) => {
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
      <div>
        <Input
          debounce={500}
          domProps={{
            type: 'text',
            value: page.title,
            onChange: title => updatePage({ id: page.id, title }),
            placeholder: 'Page sans titre',
          }}
        />
      </div>
      <div className={styles.large}>
        <Input
          debounce={500}
          domProps={{
            type: 'text',
            value: page.description,
            onChange: description => updatePage({ id: page.id, description }),
            placeholder: 'Page sans description',
          }}
        />
      </div>
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
