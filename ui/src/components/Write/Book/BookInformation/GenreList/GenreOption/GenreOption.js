import React from 'react'
import { SelectOption } from 'components/common'

const GenreOption = ({ genre={}, defaultValue }) => <SelectOption value={genre._id} label={genre.name} defaultValue={defaultValue}/>

export default GenreOption
