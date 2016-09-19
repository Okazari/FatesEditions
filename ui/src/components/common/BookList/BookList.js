import React from 'react'
import { Box, BoxHeader } from '../Box'

const BookList = () => {
  return (
    <Box>
      <BoxHeader withBorder>
        <h3 className="box-title">Livres publiés</h3>
      </BoxHeader>
      <div className="dataTables_wrapper form-inline" role="grid">
        <div className="row">
          <div className="col-xs-6">
            <div className="dataTables_info" id="example1_info">
            </div>
          </div>
          <div className="col-xs-6">
          </div>
        </div>
        <table className="table table-bordered table-hover table-striped dataTable">
          <thead>
            <tr>
              <th rowSpan="1" colSpan="1" style={{width: '10%'}}>
                Titre du livre
              </th>
              <th rowSpan="1" colSpan="1">
                Genre
              </th>
              <th rowSpan="1" colSpan="1">
                Visibilité
              </th>
              <th rowSpan="1" colSpan="1">
                Synopsis
              </th>
              <th rowSpan="1" colSpan="1" style={{width:'1%'}}>
                <button disabled="" className="btn btn-primary md-whiteframe-z1">
                  Editer
                </button>
              </th>
              <th rowSpan="1" colSpan="1" style={{width:'1%'}}>
                <button disabled="" className="btn btn-primary fa fa-close md-whiteframe-z1" style={{height:'34px'}}>
                </button>
              </th>
            </tr>
          </thead>
          <tbody role="alert" aria-live="polite" aria-relevant="all">
            <tr className="odd">
            </tr>
            <tr>
              <td>Chez Zenika</td>
              <td>
                <h4 className="label label-primary">
                  <i className="fa fa-child" style={{marginRight:'5px'}}>
                  </i>
                  Educatif
                </h4>
              </td>
              <td>
                <h4 className="label label-danger">
                  Brouillon
                  <i className="fa fa-pencil genre-icon">
                  </i>
                </h4>
              </td>
              <td>
                Blabla
              </td>
              <td>
                <button className="btn btn-primary" href="#/write/book/56c734bfeca647810366e5ec">
                  Editer
                </button>
              </td>
              <td>
                <button className="btn btn-primary fa fa-close" style={{height:'34px'}}>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="row">
          <div className="col-xs-6">
          </div>
          <div className="col-xs-6">
            <div className="dataTables_paginate paging_bootstrap">
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default BookList
