import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../Box'
import styles from './styles.scss'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render() {
    const { title, text, buttons } = this.props
    return (
      <div className={styles.component}>
        <Box className={styles.modal}>
          <BoxHeader>
            <h4>{title}</h4>
          </BoxHeader>
          <BoxBody>{text}</BoxBody>
          <BoxFooter>{buttons}</BoxFooter>
        </Box>
      </div>
    )
  }
}

export default Modal
