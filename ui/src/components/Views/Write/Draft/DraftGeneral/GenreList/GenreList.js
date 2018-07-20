import React from 'react'
import { SelectInput } from 'components/common'

const GenreList = ({ genres = [], domProps }) => {
  return (
    <SelectInput
      label="Genres"
      debounce={500}
      placeholder="-- Aucun genre selectionné --"
      domProps={domProps}
    >
      {
        genres.map(genre =>
          <option value={genre} key={genre.id}>
            {genre.name}
          </option>,
        )
      }
    </SelectInput>
  )
}

export default GenreList
