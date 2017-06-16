import React from 'react'
import { Box, BoxHeader, BoxBody } from '../../../../common/Box'

const DraftPublication = ({ draft = {} }) => {
  return (
    <Box>
      <BoxHeader>
        <h4>Publiez le !</h4>
      </BoxHeader>
      <BoxBody />
    </Box>
  );
}

export default DraftPublication
