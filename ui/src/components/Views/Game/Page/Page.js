import React from 'react'
import classnames from 'classnames'
import { convertFromRaw, Editor, EditorState, ContentState } from 'draft-js'
import Image from 'components/common/TextEditor/Image'
import styles from './style.scss'

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newPage: true,
    }
    this.timeOut = setTimeout(() => {
      this.setState({ newPage: false })
    }, 300)
  }

  componentDidUpdate(prevProps) {
    const { resetScrolling } = this.props
    if (prevProps.page.id !== this.props.page.id) {
      resetScrolling()
      console.log('pages are diff !==')
      this.setState({ newPage: true })
      this.timeOut = setTimeout(() => {
        this.setState({ newPage: false })
      }, 300)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut)
  }

  render() {
    const { page = {} } = this.props
    const { newPage } = this.state
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
}

export default Page
