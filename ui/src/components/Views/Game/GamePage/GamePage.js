import React from 'react'
import { convertFromRaw, Editor, EditorState, ContentState } from 'draft-js'
import Image from 'components/common/TextEditor/Image'
import GameTransition from './GameTransition'
import styles from './styles.scss'

class GamePage extends React.Component {
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
        <div className={styles.editorWrapper}>
          <Editor
            editorState={EditorState.createWithContent(pageContent)}
            blockRendererFn={blockRenderer}
            readOnly
          />
        </div>
        <div className={styles.transitionsPlaceholder}>
          <div className={styles.gameTransitions}>
            {
              !!page.transitions && page.transitions.map(transitionId => <GameTransition
                key={transitionId}
                transitionId={transitionId}
              />)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default GamePage
