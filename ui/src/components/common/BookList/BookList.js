import React from 'react'
import { Box, BoxHeader } from '../Box'
import DataTable from '../DataTable'
import BookRow from './BookRow'

const BookList = ({ books = [] }) => {

  return (
    <Box>
      <BoxHeader withBorder>
        <h3 className="box-title ">
          Livres publiés
        </h3>
      </BoxHeader>
      <DataTable>
        {books.map(book => <BookRow bookId={book} key={book} />)}
      </DataTable>
    </Box>
  )
}

export default BookList
