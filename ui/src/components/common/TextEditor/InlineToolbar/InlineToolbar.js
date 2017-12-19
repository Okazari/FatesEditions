import React from 'react'
import ToolbarIcon from './ToolbarIcon'
import styles from './styles.scss'

const InlineStyles = [
  { icon: 'fa fa-bold', style: 'BOLD', key: 'bold' },
  { icon: 'fa fa-italic', style: 'ITALIC', key: 'italic' },
  { icon: 'fa fa-underline', style: 'UNDERLINE', key: 'underline' },
]

const BlockTypes = [
  { icon: 'fa fa-list-ul', style: 'unordered-list-item', key: 'ul-list' },
  { icon: 'fa fa-list-ol', style: 'ordered-list-item', key: 'ol-list' },
  { icon: 'fa fa-quote-right', style: 'blockquote', key: 'blockquote' },
]

const Headers = [
  { label: 'Normal', style: 'unstyled', key: 'unstyled' },
  { label: 'H1', style: 'header-one', key: 'header-one' },
  { label: 'H2', style: 'header-two', key: 'header-two' },
  { label: 'H3', style: 'header-three', key: 'header-three' },
  { label: 'H4', style: 'header-four', key: 'header-four' },
  { label: 'H5', style: 'header-five', key: 'header-five' },
  { label: 'H6', style: 'header-six', key: 'header-six' },
]

const InlineToolbar = ({
  onToggleInlineStyle, onToggleBlockType,
  onInsertImage, addInput, triggerClick,
}) => {
  return (
    <div className={styles.toolbar}>
      <ul className={styles.inlineToolbar}>
        <li className={styles.toolbarItem} key="toolbarHeaders">
          <select
            className={styles.toolbarHeaders}
            onChange={e => onToggleBlockType(e.target.value)}
          >
            {
              Headers.map(header => (
                <option key={header.key} value={header.style}>
                  {header.label}
                </option>
              ))
            }
          </select>
        </li>
        { InlineStyles.map(style => <ToolbarIcon
          key={style.key}
          onToggle={onToggleInlineStyle}
          style={style}
        />) }
        { BlockTypes.map(type => <ToolbarIcon
          key={type.key}
          onToggle={onToggleBlockType}
          style={type}
        />) }
        <li className={styles.toolbarItem} key="toolbarImageButton">
          <a className={styles.toolbarIconLink} onClick={() => triggerClick('imageFileInput')}>
            <i className="fa fa-picture-o" />
            <input
              type="file"
              style={{ display: 'none' }}
              ref={input => addInput('imageFileInput', input)}
              onChange={e => onInsertImage(e.target.files[0])}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default InlineToolbar
