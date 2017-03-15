import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from 'components/common/Box'
import { Button, DataTable, Loader } from 'components/common';
import StatRow from './StatRow'

const BookStat = ({stats = []}) => {
  const headers = [
    {type: "Nom"},
    {type: "Description"},
    {type: "Valeur initiale"},
    {type: "Minimum"},
    {type: "Maximum"},
    {type: "Visible", classtype: ""},
    {type: <Button domProps={{"disabled": true}} className="fa fa-close md-whiteframe-z1"/> }
  ]

  return (
    <div className="col-lg-12 col-sm-12 col-xs-12">
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Caractéristiques</h3>
          <div className="box-tools pull-right">
            <div className="btn-group">
            </div>
          </div>
        </BoxHeader>
        <BoxBody className="no-padding">
          <DataTable headers={headers} className="table-hover">
            {stats.map(stat => <StatRow stat={stat}/>)}
          </DataTable>
        </BoxBody>
        <BoxFooter className="align-center">
          <Button className="md-whiteframe-z1">
            Ajouter une caractéristique
          </Button>
          <Loader />
        </BoxFooter>
      </Box>
    </div>
  )}

export default BookStat
