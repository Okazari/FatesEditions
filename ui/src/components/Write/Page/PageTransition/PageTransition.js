import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from 'components/common/Box';
import { Button, Loader } from 'components/common'

const PageTransition = ({page}) => {
  return (
    <div className="col-lg-12 col-sm-12 col-xs-12">
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Transitions</h3>
        </BoxHeader>
        <BoxBody>
          <Box className="box-default md-whiteframe-z1 box-solid">
            <BoxHeader withBorder>
              <div className="input-group float-left">
                <label>Page de destination
                  <Button className="btn-xs md-whiteframe-z1"><i className="fa fa-pencil"/>Editer la page de destination</Button>
                  <Button className="btn-xs md-whiteframe-z1"><i className="fa fa-plus"/>Créer et lier la nouvelle page</Button>
                </label>
                <select className="form-control">
                  <option value="" selected>-- Vers une nouvelle page --</option>
                </select>
              </div>
              <div className="box-tools pull-right">
                <button className="btn btn-box-tool md-whiteframe-z1" ><i className="fa fa-times"/></button>
              </div>
            </BoxHeader>
            <BoxBody>
              <div className="row no-margin">
                <textarea rows="5" name="cover" className="form-control" placeholder="Texte de la transition" required/>
              </div>
              <div className="row no-margin margin-top">
                <div className="margin-top input-group col-xs-12">
                  <label>Conditions</label>
                  <span className="margin-left">
                  Opérateur de condition :
                  <select>
                    <option value="and">ET</option>
                    <option value="or">OU</option>
                  </select>
                </span>
                  <div className="row margin-bottom">
                    <div className="col-xs-3">
                      <select className="form-control">
                      </select>
                    </div>
                    <div className="col-xs-3">
                      <select className="form-control">
                      </select>
                    </div>
                    <div className="col-xs-3" >
                      <select className="form-control">
                      </select>
                    </div>
                    <div className="col-xs-2" >
                      <input type="number" className="form-control"  placeholder="Valeur de la condition"/>
                    </div>
                    <div className="col-xs-1">
                      <Button className="fa fa-close md-whiteframe-z1"/>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <Button className="btn-xs md-whiteframe-z1">
                      Ajouter une Condition
                    </Button>
                  </div>
                </div>
              </div>
              <div className="row no-margin margin-top">
                <div className="input-group col-xs-12">
                  <label>Effet</label>
                  <div className="row margin-bottom">
                    <div className="col-xs-3">
                      <select className="form-control"/>
                    </div>
                    <div className="col-xs-3">
                      <select className="form-control"/>
                    </div>
                    <div className="col-xs-3" >
                      <select className="form-control"/>
                    </div>
                    <div className="col-xs-2" >
                      <input type="number" className="form-control"  placeholder="Valeur de la condition" />
                    </div>
                    <div className="col-xs-1">
                      <Button className="fa fa-close md-whiteframe-z1"/>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <Button className="btn-xs md-whiteframe-z1">
                      Ajouter un Effet
                    </Button>
                  </div>
                </div>
              </div>
            </BoxBody>
          </Box>
        </BoxBody>
        <BoxFooter className="align-center">
          <Button className="md-whiteframe-z1">
            Ajouter une transition
          </Button>
          <Loader />
        </BoxFooter>
      </Box>
    </div>
  )
}

export default PageTransition
