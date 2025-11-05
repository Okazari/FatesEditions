import React from 'react'
import { TextEditor } from 'components/common'
import styles from './styles.scss'

const PageContent = ({ page, updatePage }) => {
  if (!page) return null
  return (
    <div className={styles.component}>
      <TextEditor
        className={styles.component}
        initialContent={page.text || ''}
        onChange={updatePage}
      />
    </div>
  )
}

export default PageContent
