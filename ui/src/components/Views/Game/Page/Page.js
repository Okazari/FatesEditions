import React from 'react'
import classnames from 'classnames'
import { convertFromRaw, Editor, EditorState, ContentState } from 'draft-js'
import Image from 'components/common/TextEditor/Image'
import styles from './style.scss'

const Page = ({ page = {}, newPage }) => {
  const pageContent = page.text ? convertFromRaw(JSON.parse(page.text)) : ContentState.createFromText('')
  const blockRenderer = (block) => {
    if (block.getType() === 'atomic') return { component: Image, editable: false }
    return null
  }
  const className = classnames(styles.component, {
    [styles.newPage]: newPage,
  })
  return (
    <div
      className={className}
      id="page"
    >
      <Editor
        editorState={EditorState.createWithContent(pageContent)}
        blockRendererFn={blockRenderer}
        readOnly
      />
    </div>
  )
}

export default Page
