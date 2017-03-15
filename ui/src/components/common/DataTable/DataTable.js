import React from 'react'
import DataHeader from './DataHeader'
import DataBody from './DataBody'

const DataTable = ({ children, headers, className }) => {
  return (
    <div className="dataTables_wrapper form-inline" role="grid">
      <table className={`table dataTable ${className}`}>
        <DataHeader headers={headers}/>
        <DataBody>{children}</DataBody>
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
  )
}

export default DataTable
