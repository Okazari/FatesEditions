import React from 'react'
import { Button } from 'components/common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './style.scss'

const RollButton = ({ onClick, result }) => {
  return (
    <Button
      domProps={{
        onClick,
      }}
      className={styles.component}
    >
      { result !== null ? result : <FontAwesomeIcon icon={'dice'} /> }
    </Button>
  )
}

export default RollButton
