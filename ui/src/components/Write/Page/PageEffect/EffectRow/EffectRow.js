import React from 'react'
import { Button } from '../../../../common'

const PageEffect = ({ bookId, effect }) => {
  let book = {}

  fetch(`/api/book/${bookId}`).then(response => response.json()).then((data) => {
    book = data
  })

  const onVariableChange = (e) => {
    if (e.target.value === 'objects') {
      console.log(book.objects)
    } else {
      console.log(book.stats)
    }
  }

  return (
    <div className="row margin-bottom">
      <div className="col-xs-3">
        <select className="form-control" onChange={onVariableChange}>
          <option disabled selected>Choix de la variable</option>
          <option value="objects">{"L'objet"}</option>
          <option value="stats">La statistique</option>
        </select>
      </div>
      <div className="col-xs-3">
        <select className="form-control" />
      </div>
      <div className="col-xs-2" >
        <input type="number" className="form-control" placeholder="Valeur de la condition" value={effect} />
      </div>
      <div className="col-xs-1">
        <Button className="fa fa-close md-whiteframe-z1" />
      </div>
    </div>
  )
}

export default PageEffect
