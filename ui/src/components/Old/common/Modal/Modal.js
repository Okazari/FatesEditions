import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../Box'
import styles from './styles.scss'

const Modal = ({ open, title, text, buttons }) => {
  return open && (
    <div className={styles.component}>
      <Box className={styles.modal}>
        <BoxHeader>
          <h4>{title}</h4>
        </BoxHeader>
        <BoxBody>{text}</BoxBody>
        <BoxFooter className={styles.modalFooter}>{buttons}</BoxFooter>
      </Box>
    </div>
  )
}

export default Modal
