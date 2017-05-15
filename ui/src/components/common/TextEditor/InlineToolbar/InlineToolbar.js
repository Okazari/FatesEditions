import React from 'react';
import ToolbarIcon from './ToolbarIcon';
import styles from './styles.scss';

const InlineStyles = [
  { icon: 'fa fa-bold', style: 'BOLD' },
  { icon: 'fa fa-italic', style: 'ITALIC' },
  { icon: 'fa fa-underline', style: 'UNDERLINE' }
];

const BlockTypes = [
  { icon: 'fa fa-list-ul', style: 'unordered-list-item' },
  { icon: 'fa fa-list-ol', style: 'ordered-list-item' },
  { icon: 'fa fa-quote-right', style: 'blockquote' },
];

const Headers = [
  { label: 'Normal', style: 'unstyled' },
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H4', style: 'header-four'},
  { label: 'H5', style: 'header-five'},
  { label: 'H6', style: 'header-six'}
]

const InlineToolbar = ({onToggleInlineStyle, onToggleBlockType, onInsertImage, addInput, triggerClick}) => {
  return (
    <div className={styles.toolbar}>
      <ul className={styles.inlineToolbar}>
        <li className={styles.toolbarItem}>
          <select className={styles.toolbarHeaders} onChange={(e) => onToggleBlockType(e.target.value)}>
            {Headers.map(header => <option value={header.style}>{header.label}</option>)}
          </select>
        </li>
        { InlineStyles.map(style => <ToolbarIcon onToggle={onToggleInlineStyle} style={style}/>) }
        { BlockTypes.map(type => <ToolbarIcon onToggle={onToggleBlockType} style={type}/>) }
        <li className={styles.toolbarItem}>
          <a className={styles.toolbarIconLink} onClick={() => triggerClick("imageFileInput")}>
            <i className="fa fa-picture-o"/>
            <input
              type="file"
              style={{display: 'none'}}
              ref={input => addInput("imageFileInput", input)}
              onChange={(e) => onInsertImage(e.target.files[0])}
            />
          </a>
        </li>
      </ul>
    </div>
  )
};

export default InlineToolbar
