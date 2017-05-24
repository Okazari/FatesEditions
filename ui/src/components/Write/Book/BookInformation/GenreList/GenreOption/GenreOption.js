import React from 'react'
import { SelectOption } from '../../../../../common'

const GenreOption = ({ genre = {}, defaultValue }) => {
  return <SelectOption value={genre._id} label={genre.name} defaultValue={defaultValue} />
}

export default GenreOption
