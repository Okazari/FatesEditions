import React from 'react'
import MenuItem from '../MenuItem'
import { RouteService } from '../../../../../../../../services'

const BookMenuItem = ({ draft = {} }) => {
  return (
    <MenuItem label={draft.name} link={RouteService.routes.writebook(draft._id)} />
  )
}

export default BookMenuItem
