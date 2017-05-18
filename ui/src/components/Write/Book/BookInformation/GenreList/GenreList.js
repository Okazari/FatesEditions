import React from 'react'
import { SelectInput } from '../../../../common'
import GenreOption from './GenreOption'

const GenreList = ({ genres = [], resource, resourceHandler, defaultValue }) => {
  return (
    <SelectInput
      label="Genres"
      placeholder="-- Aucun genre selectionné --"
      domProps={{ name: 'genreId' }}
      resource={resource}
      resourceHandler={resourceHandler}
    >
      {genres.map(genre => <GenreOption genreId={genre} key={genre} defaultValue={defaultValue} />)}
    </SelectInput>
  )
}

export default GenreList
