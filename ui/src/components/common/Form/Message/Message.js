import React from 'react'
import styles from './style.scss'

const Message = ({ state, errorMessage, successMessage }) => {
  const { error, data } = state
  if (error && errorMessage) {
    return (
      <div className={styles.error}>
        {errorMessage}
      </div>
    )
  }
  return (
    <div className={styles.success}>
      {successMessage}
    </div>
  )
}

export default Message
