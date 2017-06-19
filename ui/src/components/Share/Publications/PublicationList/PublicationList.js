import React from 'react'
import { Box, BoxHeader, BoxBody } from '../../../common/Box'
import DataTable from '../../../common/DataTable'
import PublicationRow from './PublicationRow'

const headers = [
  { type: 'Titre du livre', key: 'title' },
  { type: 'Genre', key: 'genre' },
  { type: 'Visibilité', key: 'visibility' },
  { type: 'Synopsis', key: 'synopsis' },
  { type: 'Editer', key: 'edit' },
  { type: 'Passer en brouillon', key: 'draft' },
]

const PublicationList = ({ books = [] }) => {
  return (
    <Box>
      <BoxHeader className="box-primary" withBorder>
        <h4>Liste Complète</h4>
      </BoxHeader>
      <BoxBody>
        <DataTable headers={headers} className="table-bordered table-hover table-striped">
          {books.map(book => <PublicationRow bookId={book} key={book} />)}
        </DataTable>
      </BoxBody>
    </Box>
  )
}

export default PublicationList
