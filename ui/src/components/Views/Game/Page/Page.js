import React from 'react'
import { convertFromRaw, Editor, EditorState, ContentState } from 'draft-js'
import Image from 'components/common/TextEditor/Image'
import styles from './style.scss'

class Page extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.page.id !== this.props.page.id) {
      this.node.parentNode.scrollTop = 0
    }
  }

  render() {
    const { page = {} } = this.props
    const pageContent = page.text ? convertFromRaw(JSON.parse(page.text)) : ContentState.createFromText('')

    const blockRenderer = (block) => {
      if (block.getType() === 'atomic') return { component: Image, editable: false }
      return null
    }
    return (
      <div
        className={styles.component}
        ref={(node) => {
          this.node = node
        }}
      >
        <Editor
          editorState={EditorState.createWithContent(pageContent)}
          blockRendererFn={blockRenderer}
          readOnly
        />
      </div>
    )
  }
}

export default Page
