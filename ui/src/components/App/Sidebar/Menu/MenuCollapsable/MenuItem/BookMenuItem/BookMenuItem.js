import React from 'react'
import MenuItem from '../MenuItem'
import { Link } from 'react-router'

const BookMenuItem = ({ draft={} }) => {
  return (
    <MenuItem label={draft.name} link={`/app/write/book/${draft._id}`} />
  )
};

export default BookMenuItem
