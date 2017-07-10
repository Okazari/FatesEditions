import React from 'react'
import { Box, BoxHeader } from '../../Box'
import Book from './Book'
import styles from './styles.scss'

const BookList = ({ books = [], startGame }) => {
  return (
    <Box>
      <BoxHeader withBorder>
        <h3 className="box-title ">
          Livres publiés
        </h3>
      </BoxHeader>
      <div className={styles.component}>
        {books.map(book => <Book bookId={book} key={book} startGame={startGame} />)}
      </div>
    </Box>
  )
}

export default BookList
