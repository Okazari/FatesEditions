import React from 'react'
import { Box, BoxHeader, BoxBody } from '../../../../common/Box'

const BookInformation = ({ draft = {} }) => {
  return (
    <Box>
      <BoxHeader>
        <h4>Livre à publier</h4>
      </BoxHeader>
      <BoxBody>
        <div>
          <img className="cover-preview md-whiteframe-z1" alt="BookCover" src={''} />
        </div>
        <div>
          <h4>{draft.name}</h4>
          <h4 className="label label-danger md-whiteframe-z1">
            <i className="fa fa-pencil" style={{ marginRight: '5px' }} />
            Brouillon
          </h4>
          <div>{draft.synopsis}</div>
        </div>
      </BoxBody>
    </Box>
  )
}

export default BookInformation
