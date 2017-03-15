import React from 'react'
import { Button } from 'components/common';

const StatRow = ({stat = {}}) => {
  return (
    <tr>
      <td><input type="text" name="cover" className="form-control" placeholder="Libellé" value={stat.name} required/></td>
      <td><input type="text" name="cover" className="form-control" placeholder="Description" value={stat.description} required/></td>
      <td><input type="number" name="cover" className="form-control" placeholder="Valeur initiale" value={stat.initValue} required/></td>
      <td><input type="number" name="cover" className="form-control" placeholder="Minimum" value={stat.min} required /></td>
      <td><input type="number" name="cover" className="form-control" placeholder="Maximum" value={stat.max} required/></td>
      <td><input type="checkbox" checked={stat.visible}/></td>
      <td><Button className="fa fa-close md-whiteframe-z1"/></td>
    </tr>
  )
}

export default StatRow
