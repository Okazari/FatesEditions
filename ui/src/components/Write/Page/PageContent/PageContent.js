import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../../common/Box'
import { Loader, TextEditor } from '../../../common'

// @todo
const PageContent = ({ page }) => {
  return (
    <div className="col-lg-12 col-sm-12 col-xs-12">
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Contenu</h3>
          <div className="box-tools pull-right">
            <div className="btn-group" />
          </div>
        </BoxHeader>
        <BoxBody>
          <TextEditor initialContent={''} saveHandler={() => {}} />
        </BoxBody>
        <BoxFooter>
          <Loader />
        </BoxFooter>
      </Box>
    </div>
  )
}

export default PageContent
