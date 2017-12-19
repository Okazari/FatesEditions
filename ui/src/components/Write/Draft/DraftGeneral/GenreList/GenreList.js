import React from 'react'
import { SelectInput } from 'components/common'
import GenreOption from './GenreOption'

const GenreList = ({ genres = [], domProps }) => {
  return (
    <SelectInput
      label="Genres"
      debounce={500}
      placeholder="-- Aucun genre selectionné --"
      domProps={domProps}
    >
      {genres.map(genre =>
        <option value={genre} key={genre}>
          <GenreOption genreId={genre} key={genre} />
        </option>)}
    </SelectInput>
  )
}

export default GenreList
