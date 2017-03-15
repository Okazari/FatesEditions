import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from 'components/common/Box'
import { Loader } from 'components/common';
import PageGraph from './PageGraph'

const BookGraph = ({book = {}}) => {
  return (
    <div className="col-lg-6 col-sm-6 col-xs-12">
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Graphique</h3>
          <div className="box-tools pull-right">
            <div className="btn-group">
            </div>
          </div>
        </BoxHeader>
        <BoxBody>
          <PageGraph bookId={book._id}/>
        </BoxBody>
        <BoxFooter className="align-center">
          <Loader />
        </BoxFooter>
      </Box>
    </div>
  )}

export default BookGraph
