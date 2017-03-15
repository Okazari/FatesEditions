import React from 'react'
import { Button } from 'components/common';

const ItemRow = ({item = {}}) => {
  return (
    <tr>
      <td><input type="text" className="form-control" placeholder="Libellé" value={item.name} required/></td>
      <td><input type="text" className="form-control" placeholder="Description" value={item.description} required/></td>
      <td><input type="checkbox" checked={item.atStart} /></td>
      <td><input type="checkbox" checked={item.visible}/></td>
      <td><Button className="fa fa-close md-whiteframe-z1" /></td>
    </tr>

  )
}

export default ItemRow
