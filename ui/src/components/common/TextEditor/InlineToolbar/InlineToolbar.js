import React from 'react'
import { ButtonIcon, SelectInput } from 'components/common'
import styles from './styles.scss'

const InlineStyles = [
  { style: 'BOLD', key: 'bold', icon: 'format_bold' },
  { style: 'ITALIC', key: 'italic', icon: 'format_italic' },
  { style: 'UNDERLINE', key: 'underline', icon: 'format_underline' },
]

const BlockTypes = [
  { style: 'unordered-list-item', key: 'ul-list', icon: 'format_list_bulleted' },
  { style: 'ordered-list-item', key: 'ol-list', icon: 'format_list_numbered' },
  { style: 'blockquote', key: 'blockquote', icon: 'format_quote' },
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
        <SelectInput
          className={styles.toolbarItem}
          domProps={{
            onChange: value => onToggleBlockType(value),
          }}
        >
          {
            Headers.map(header => (
              <option key={header.key} value={header.style}>
                {header.label}
              </option>
            ))
          }
        </SelectInput>
        {
          InlineStyles.map(style => (
            <ButtonIcon
              className={styles.toolbarItem}
              key={style.key}
              icon={style.icon}
              onToggle={onToggleInlineStyle}
              style={style}
            />
          ))
        }
        {
          BlockTypes.map(type => (
            <ButtonIcon
              className={styles.toolbarItem}
              key={type.key}
              icon={type.icon}
              onToggle={onToggleBlockType}
              style={type}
            />
          ))
        }
        <ButtonIcon
          className={styles.toolbarItem}
          domProps={{ onClick: () => triggerClick('imageFileInput') }}
          icon="insert_photo"
        />
        <input
          type="file"
          style={{ display: 'none' }}
          ref={input => addInput('imageFileInput', input)}
          onChange={e => onInsertImage(e.target.files[0])}
        />
      </ul>
    </div>
  )
}

export default InlineToolbar
