import React from 'react'
import styles from './styles.scss'

const RowInput = ({ injectedProps, domProps, className }) => {
  const finalDomProps = { ...domProps }
  if (finalDomProps.type === 'checkbox') {
    finalDomProps.checked = injectedProps.inputValue
  }
  return (
    <input
      value={injectedProps.inputValue}
      className={`${styles.component} ${className}`}
      onChange={injectedProps.updateInput}
      {...finalDomProps}
    />
  )
}

export default RowInput
