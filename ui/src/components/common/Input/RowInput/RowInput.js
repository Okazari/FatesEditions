import React from 'react'
import styles from './styles.scss'

const RowInput = ( {injectedProps, domProps} ) => {
  if(domProps.type === "checkbox") {
    domProps = {...domProps, checked: injectedProps.inputValue}
  }
  return <input value={injectedProps.inputValue} className={styles.component} {...domProps} onChange={injectedProps.updateInput}/>
}

export default RowInput
