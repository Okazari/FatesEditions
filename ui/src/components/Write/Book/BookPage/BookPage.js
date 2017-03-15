import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from 'components/common/Box'
import { Button, DataTable, Loader } from 'components/common';
import PageRow from './PageRow'

const headers = [
  { type: <Button domProps={{disabled: true}} className="fa fa-pencil md-whiteframe-z1"/> },
  { type: "Titre" },
  { type: "Description" },
  { type: <Button domProps={{disabled: true}} className="fa fa-close md-whiteframe-z1"/> },
]

const BookPage = ({pages = [], bookId}) => {
  return (
    <div className="col-lg-6 col-sm-6 col-xs-12">
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Pages</h3>
          <div className="box-tools pull-right">
            <div className="btn-group">
            </div>
          </div>
        </BoxHeader>
        <BoxBody className="table-responsive no-padding">
          <DataTable className="table-hover" headers={headers}>
            {pages.map(page => <PageRow pageId={page} key={page} bookId={bookId}/>)}
          </DataTable>
        </BoxBody>
        <BoxFooter className="align-center">
          <Loader/>
        </BoxFooter>
      </Box>
    </div>
  )}

export default BookPage
