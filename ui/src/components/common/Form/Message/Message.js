import React from 'react'
import styles from './style.scss'

const Message = ({ state, errorMessage, successMessage }) => {
  const { error, data } = state
  if (error) {
    return (
      <div className={styles.error}>
        {errorMessage}
      </div>
    )
  }
  if (data) {
    return (
      <div className={styles.success}>
        {successMessage}
      </div>
    )
  }
  return null
}

export default Message
