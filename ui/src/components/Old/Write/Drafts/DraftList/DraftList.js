import React from 'react'
import { Box, BoxHeader } from '../../../common/Box'
import { DataTable } from '../../../common'
import DraftRow from './DraftRow'

const headers = [
  { type: 'Titre du livre', key: 'title' },
  { type: 'Genre', key: 'genre' },
  { type: 'Visibilité', key: 'visibility' },
  { type: 'Synopsis', key: 'synopsis' },
  { type: 'Editer', key: 'edit' },
  { type: 'Supprimer', key: 'delete' },
]

const DraftList = ({ drafts = [] }) => {
  return (
    <Box className="box-primary">
      <BoxHeader withBorder>
        <h3 className="box-title ">
          Livres publiés
        </h3>
      </BoxHeader>
      <DataTable headers={headers} className="table-bordered table-hover table-striped">
        {drafts.map(draft => <DraftRow draftId={draft} key={draft} />)}
      </DataTable>
    </Box>
  )
}

export default DraftList
