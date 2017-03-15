import React from 'react'
import { Link } from 'react-router'

const DraftRow = ({ draft = {}, genre }) => {
  return (
    <tr>
      <td>
        {draft.name}
      </td>
      <td>
        {
          genre && <h4 className="label label-primary">
            <i className="fa fa-icon" style={{marginRight: '5px'}} />
            {genre.name}
          </h4>
        }
      </td>
      <td>
        <h4 className="label label-danger md-whiteframe-z1">
          <i className="fa fa-pencil" style={{marginRight: '5px'}} />
          Brouillon
        </h4>
      </td>
      <td>
        {draft.synopsis}
      </td>
      <td>
          <Link to={`/app/write/book/${draft._id}`}>
            <button className="btn btn-primary md-whiteframe-z1">
              Editer
            </button>
          </Link>
      </td>
      <td>
        <button className="btn btn-primary fa fa-close md-whiteframe-z1"/>
      </td>
    </tr>
  )
}

export default DraftRow
