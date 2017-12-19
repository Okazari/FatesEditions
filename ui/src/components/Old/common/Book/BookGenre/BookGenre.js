import React from 'react'
import styles from './styles.scss'

const BookGenres = ({ genre = {} }) => {
  return (
    <span>
      <i className={`fa fa-icon fa-${genre.icon}`} />
      <span className={styles.genreName}>{genre.name}</span>
    </span>
  )
}

export default BookGenres
