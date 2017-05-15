import React from 'react'
import BookGenre from './BookGenre'
import { GenreService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
const ConnectedComponent = restHoc(BookGenre, GenreService)
export default ({genre}) => <ConnectedComponent genreId={genre} key={genre}/>
