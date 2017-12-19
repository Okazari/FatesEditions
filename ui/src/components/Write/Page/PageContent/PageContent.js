import React from 'react'
import { TextEditor } from 'components/common'
import styles from './styles.scss'

const PageContent = ({ page, updateResource }) => {
  if (!page) return null
  return (
    <div className={styles.component}>
      <TextEditor
        className={styles.component}
        initialContent={page.text || ''}
        resource={page}
        resourceHandler={updateResource}
        domProps={{ name: 'text' }}
      />
    </div>
  )
}

export default PageContent
