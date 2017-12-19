import React from 'react'
import classnames from 'classnames'
import { convertFromRaw, convertToRaw, Editor, EditorState, RichUtils, AtomicBlockUtils } from 'draft-js'
import debounce from 'lodash.debounce'
import styles from './styles.scss'
import InlineToolbar from './InlineToolbar'
import Image from './Image'

const TabDepth = 4

class TextEditor extends React.Component {
  constructor(props) {
    super(props)
    const { debounceTime, initialContent } = this.props
    if (initialContent) {
      const contentState = convertFromRaw(JSON.parse(initialContent))
      this.state = { editorState: EditorState.createWithContent(contentState) }
      this.state = { editorState: EditorState.moveFocusToEnd(this.state.editorState) }
    } else {
      this.state = { editorState: EditorState.createEmpty() }
    }
    this.focus = () => this.editor.focus()
    this.debounceUpdate = debounce(this.updateContent, debounceTime || 1000)
  }

  onChange = (editorState) => {
    this.setState({ editorState })
    this.debounceUpdate()
  }

  onInsertImage = (image) => {
    const { editorState } = this.state
    const contentState = editorState.getCurrentContent()
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = () => {
      const contentStateWithImage = contentState.createEntity('atomic', 'IMMUTABLE', { src: reader.result })
      const entityKey = contentStateWithImage.getLastCreatedEntityKey()
      this.onChange(AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' '), entityKey)
    }
  }

  onTab = (e) => {
    e.preventDefault()
    const { editorState } = this.state
    this.onChange(RichUtils.onTab(e, editorState, TabDepth))
  }

  updateContent = () => {
    const { resource, resourceHandler, domProps } = this.props
    const { editorState } = this.state
    resource[domProps.name] = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    resourceHandler(resource, false)
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
    const textEditorClassName = classnames(className, styles.TextEditorRoot)
    return (
      <div className={textEditorClassName}>
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
            spellCheck
          />
        </div>
      </div>
    )
  }
}

export default TextEditor
