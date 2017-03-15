import React from 'react'
import { Box, BoxHeader } from 'components/common/Box'
import { DataTable } from 'components/common'
import DraftRow from './DraftRow'

const DraftList = ({ drafts = [] }) => {

  const headers = [
    {type: "Titre du livre"},
    {type: "Genre"},
    {type: "Visibilité"},
    {type: "Synopsis"},
    {type: "Editer"},
    {type: "Supprimer"}
  ]

  return (
    <Box>
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
