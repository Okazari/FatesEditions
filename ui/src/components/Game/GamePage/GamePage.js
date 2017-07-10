import React from 'react'
import { convertFromRaw, Editor, EditorState } from 'draft-js'
import Image from '../../common/TextEditor/Image'
import styles from './styles.scss'

const GamePage = ({ page = {} }) => {
  const pageContent = convertFromRaw(JSON.parse(page.text))
  const blockRenderer = (block) => {
    if (block.getType() === 'atomic') return { component: Image, editable: false }
    return null
  }

  return (
    <div>
      <Editor
        editorState={EditorState.createWithContent(pageContent)}
        blockRendererFn={blockRenderer}
        readOnly
      />
    </div>
  )
}

export default GamePage
