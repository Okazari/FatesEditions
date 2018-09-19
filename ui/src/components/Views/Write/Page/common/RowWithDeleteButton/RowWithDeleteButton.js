import React from 'react'
import { ButtonIcon } from 'components/common'
import styles from './style.scss'


const RowWithDeleteButton = ({ removeRow, children }) => {
  return (
    <div className={styles.component}>
      {children}
      <ButtonIcon icon="delete" domProps={{ onClick: removeRow }} />
    </div>
  )
}

export default RowWithDeleteButton