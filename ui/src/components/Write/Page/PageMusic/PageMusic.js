import React from 'react'
import { Box, BoxHeader, BoxBody } from '../../../common/Box'
import { Button, Loader } from '../../../common'

const PageInformation = ({ page }) => {
  return (
    <div className="col-lg-12 col-sm-12 col-xs-12">
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Musique de fond</h3>
          <div className="box-tools pull-right">
            <div className="btn-group" />
          </div>
        </BoxHeader>
        <BoxBody>
          <div className="row">
            <div className="col-sm-4 margin-top col-xs-12">
              <span>Lien SoundCloud</span>
              <div className="input-group col-xs-12">
                <div className="input-group-btn"><Button ><i className="fa" /></Button></div>
                <input type="text" name="cover" className="form-control " placeholder="Lien SoundCloud de votre musique de fond" />
              </div>
            </div>
          </div>
          <Loader />
        </BoxBody>
      </Box>
    </div>
  )
}

export default PageInformation
