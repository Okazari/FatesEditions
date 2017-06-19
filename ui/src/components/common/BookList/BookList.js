import React from 'react'
import { Box, BoxHeader } from '../Box'
import DataTable from '../DataTable'
import BookRow from './BookRow'

const headers = [
  { type: 'Titre du livre', key: 'title' },
  { type: 'Synopsis', key: 'synopsis' },
  { type: 'Auteur', key: 'author' },
  { type: 'Genre', key: 'genre' },
  { type: 'Jouer', key: 'play' },
]
const BookList = ({ books = [] }) => {
  return (
    <Box>
      <BoxHeader withBorder>
        <h3 className="box-title ">
          Livres publiés
        </h3>
      </BoxHeader>
      <DataTable headers={headers} className="table-bordered table-hover table-striped">
        {books.map(book => <BookRow bookId={book} key={book} />)}
      </DataTable>
    </Box>
  )
}

export default BookList
