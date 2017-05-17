import React from 'react'
import { AtomicBlockUtils, ContentState, Editor, EditorState, RichUtils } from 'draft-js'
import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor'
import { stateToHTML } from 'draft-js-export-html'
import styles from './styles.scss'
import InlineToolbar from './InlineToolbar'
import Image from './Image'

const TabDepth = 4

class TextEditor extends React.Component {
  constructor(props) {
    super(props)
    if (props.initialContent.trim() !== "''") {
      const processedHTML = DraftPasteProcessor.processHTML(this.props.initialContent)
      const contentState = ContentState.createFromBlockArray(processedHTML)
      this.state = { editorState: EditorState.createWithContent(contentState) }
      this.state = { editorState: EditorState.moveFocusToEnd(this.state.editorState) }
    } else {
      this.state = { editorState: EditorState.createEmpty() }
    }
    this.onChange = editorState => this.setState({ editorState })
    this.focus = () => this.editor.focus()
  }

  onInsertImage = (image) => {
    const currentContentState = this.state.editorState.getCurrentContent()
    const entityKey = currentContentState.createEntity('atomic', 'IMMUTABLE', { src: URL.createObjectURL(image) })
    this.onChange(AtomicBlockUtils.insertAtomicBlock(this.state.editorState, entityKey, ''))
  }

  onTab = (e) => {
    this.onChange(RichUtils.onTab(e, this.state.editorState, TabDepth))
  }

  toggleBlockType = (blocktype) => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blocktype))
  }

  toggleInlineStyle = (style) => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, style))
  }

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
    if (newState) this.onChange(newState)
  }

  addInput = (inputName, input) => {
    this[inputName] = input
  }

  triggerClick = (input) => {
    this[input].click()
  }

  saveHtml = () => {
    const { saveHandler } = this.props
    const html = stateToHTML(this.state.editorState.getCurrentContent())
    saveHandler(html)
  }

  blockRenderer = (block) => {
    if (block.getType() === 'atomic') return { component: Image, editable: false }
    return null
  }

  blockStyle = (block) => {
    if (block.getType() === 'unstyled') return 'paragraph'
    return null
  }

  render() {
    return (
      <div className={styles.TextEditorRoot}>
        <InlineToolbar
          onToggleInlineStyle={this.toggleInlineStyle}
          onToggleBlockType={this.toggleBlockType}
          onInsertImage={this.onInsertImage}
          addInput={this.addInput}
          triggerClick={this.triggerClick}
        />
        <div className={styles.TextEditor} onClick={this.focus} onBlur={this.saveHtml}>
          <Editor
            ref={(editor) => { this.editor = editor }}
            blockRendererFn={this.blockRenderer}
            blockStyleFn={this.blockStyle}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            placeholder="Contenu..."
            spellCheck
          />
        </div>
      </div>
    )
  }
}

export default TextEditor
