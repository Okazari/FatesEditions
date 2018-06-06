import React from 'react'
import { convertFromRaw, Editor, EditorState } from 'draft-js'
import Image from 'components/common/TextEditor/Image'
import GameTransition from './GameTransition'
import styles from './styles.scss'

const GamePage = ({ page = {}, hoverTransition, outTransition, changePage }) => {
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
      <div className={styles.gameTransitions}>
        {
          page.transitions.map(transition => <GameTransition
            key={transition.id}
            transition={transition}
            hoverTransition={hoverTransition}
            outTransition={outTransition}
            changePage={changePage}
          />)
      }
      </div>
    </div>
  )
}

export default GamePage