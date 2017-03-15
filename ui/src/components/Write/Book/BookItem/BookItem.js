import React from "react";
import { Box, BoxHeader, BoxBody, BoxFooter } from "components/common/Box";
import { Button, DataTable, Loader } from "components/common";
import ItemRow from './ItemRow';

const headers = [
  { type: "Nom" },
  { type: "Description" },
  { type: "Début" },
  { type: "Visible" },
  { type: <Button domProps={{"disabled":true}} className="fa fa-close md-whiteframe-z1" /> }
]

const BookItem = ({items = []}) => {
  return (
    <div className="col-lg-12 col-sm-12 col-xs-12">
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Objets</h3>
          <div className="box-tools pull-right">
            <div className="btn-group">
            </div>
          </div>
        </BoxHeader>
        <BoxBody className="no-padding">
          <DataTable headers={headers} className="table-hover">
            {items.map(item => <ItemRow item={item} />)}
          </DataTable>
        </BoxBody>
        <BoxFooter className="align-center">
          <Button className="md-whiteframe-z1">
            Ajouter un objet
          </Button>
          <Loader />
        </BoxFooter>
      </Box>
    </div>  )
}

export default BookItem
