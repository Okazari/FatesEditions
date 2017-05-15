import React from 'react'
import { RowInput } from 'components/common'
import { Button } from 'components/common'

const ItemRow = ({ index, item = {}, updateResource, deleteResource }) => {
  return (
    <tr>
      <td><RowInput resource={item} resourceHandler={updateResource} domProps={{type: "text", name: "name", placeholder: "Libellé", required: true}}/></td>
      <td><RowInput resource={item} resourceHandler={updateResource} domProps={{type: "text", name: "description", placeholder: "Description", required: true}}/></td>
      <td><RowInput resource={item} resourceHandler={updateResource} domProps={{type: "checkbox", name: "atStart", placeholder: "Début", required: true}}/></td>
      <td><RowInput resource={item} resourceHandler={updateResource} domProps={{type: "checkbox", name: "visible", placeholder: "Visible", required: true}}/></td>
      <td><Button className="fa fa-close md-whiteframe-z1" domProps={{onClick: (event) => {deleteResource(event.target.name)}, name: index}}/></td>
    </tr>

  )
}

export default ItemRow
