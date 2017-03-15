import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from 'components/common/Box'
import { Button } from 'components/common'

const BookInformation = ({book = {}}) => {
  return (
    <div className="col-lg-12 col-sm-12 col-xs-12">
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Information générales</h3>
          <div className="box-tools pull-right">
            <div className="btn-group">
              <label className="label label-danger md-whiteframe-z1"><i className="fa fa-pencil"/> Brouillon</label>
            </div>
          </div>
        </BoxHeader>
        <BoxBody>
          <div id="book-cover" className="col-lg-3 col-sm-3 col-xs-3 changer-cover">
            <img className="cover-preview md-whiteframe-z1" alt="User"/>
            <div className="input-group margin-top md-whiteframe-z1">
              <span className="input-group-addon">URL</span>
              <input type="text" name="cover" className="form-control " placeholder="url de l'image de couverture" required />
            </div>
          </div>
          <div className="col-xs-9">
            <div id="book-title" className="input-group margin-top col-xs-12">
              <label>Titre</label>
              <input type="text" name="cover" className="form-control" placeholder="Titre du livre" value={book.name} required/>
            </div>
            <div id="book-genre" className="input-group margin-top col-xs-12">
              <label>Genre</label>
              <select data-icon="fa fa-{{genre.icon}}" className="form-control">
                <option value="" selected>-- Aucun genre selectionné --</option>
              </select>
            </div>
            <div id="book-synopsis" className="input-group margin-top col-xs-12">
              <label>Synopsis</label>
              <textarea rows="5" name="synopsis" className="form-control" placeholder="Synopsis" value={book.synopsis} required/>
            </div>
            <div id="book-starting-page" className="input-group margin-top col-xs-12">
              <label>Page de début</label>
              <select className="form-control">
                <option value="" selected>-- Aucune page selectionnée --</option>
              </select>
            </div>
          </div>
        </BoxBody>
        <BoxFooter>
          <div className="margin-top col-xs-12 text-center">
            <Button>Essayer mon brouillon</Button>
          </div>
        </BoxFooter>
      </Box>
    </div>
  )}

export default BookInformation
