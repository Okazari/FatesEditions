import React from 'react'
import styles from './styles.scss'

const BookGenres = ({ genre = {} }) => {
  return (
    <div>
      <i className={`fa fa-icon fa-${genre.icon}`} />
      <span className={styles.genreName}>{genre.name}</span>
    </div>
  )
}

export default BookGenres
