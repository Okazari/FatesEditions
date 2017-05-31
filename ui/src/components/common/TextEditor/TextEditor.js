import React from 'react'
import { AtomicBlockUtils, ContentState, Editor, EditorState, RichUtils } from 'draft-js'
import debounce from 'lodash.debounce'
import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor'
import { stateToHTML } from 'draft-js-export-html'
import styles from './styles.scss'
import InlineToolbar from './InlineToolbar'
import Image from './Image'

const TabDepth = 4

class TextEditor extends React.Component {
  constructor(props) {
    super(props)
    const { resource, resourceHandler, debounceTime } = this.props
    if (props.initialContent.trim() !== "''") {
      const processedHTML = DraftPasteProcessor.processHTML(this.props.initialContent)
      const contentState = ContentState.createFromBlockArray(processedHTML)
      this.state = { editorState: EditorState.createWithContent(contentState) }
      this.state = { editorState: EditorState.moveFocusToEnd(this.state.editorState) }
    } else {
      this.state = { editorState: EditorState.createEmpty() }
    }
    this.focus = () => this.editor.focus()
    this.debounceUpdate = debounce(
      () => resourceHandler(resource, false), debounceTime || 1000,
    )
  }

  onChange = (editorState) => {
    const { resource, domProps } = this.props
    this.setState({ editorState })
    resource[domProps.name] = stateToHTML(editorState.getCurrentContent())
    this.debounceUpdate()
  }

  onInsertImage = (image) => {
    const { editorState } = this.state
    const currentContentState = editorState.getCurrentContent()
    const entityKey = currentContentState.createEntity('atomic', 'IMMUTABLE', { src: URL.createObjectURL(image) })
    this.onChange(AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ''))
  }

  onTab = (e) => {
    const { editorState } = this.state
    this.onChange(RichUtils.onTab(e, editorState, TabDepth))
  }

  toggleBlockType = (blocktype) => {
    const { editorState } = this.state
    this.onChange(RichUtils.toggleBlockType(editorState, blocktype))
  }

  toggleInlineStyle = (style) => {
    const { editorState } = this.state
    this.onChange(RichUtils.toggleInlineStyle(editorState, style))
  }

  handleKeyCommand = (command) => {
    const { editorState } = this.state
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) this.onChange(newState)
  }

  addInput = (inputName, input) => {
    this[inputName] = input
  }

  triggerClick = (input) => {
    this[input].click()
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
    const { className } = this.props
    return (
      <div className={`${styles.TextEditorRoot} ${className}`}>
        <InlineToolbar
          onToggleInlineStyle={this.toggleInlineStyle}
          onToggleBlockType={this.toggleBlockType}
          onInsertImage={this.onInsertImage}
          addInput={this.addInput}
          triggerClick={this.triggerClick}
        />
        <div className={styles.TextEditor} onClick={this.focus}>
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
