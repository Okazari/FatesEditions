import React from 'react'
import { TextEditor } from 'components/common'
import styles from './styles.scss'

const PageContent = ({ params: { draftId }, page, updatePage }) => {
  if (!page) return null

  const doUpdatePage = text => updatePage({
    variables: {
      page: { id: page.id, text },
      bookId: draftId,
    },
  })
  return (
    <div className={styles.component}>
      <TextEditor
        className={styles.component}
        initialContent={page.text || ''}
        onChange={doUpdatePage}
      />
    </div>
  )
}

export default PageContent
