import React from 'react'
import styles from './styles.scss'

const Author = ({ author }) => {
  // TODO Replace with loader
  if (!author) return null
  return (
    <div className={styles.component}>
      {author.username}
    </div>
  )
}


export default Author
