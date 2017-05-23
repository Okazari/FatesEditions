//eslint-disable-next-line
import React from 'react'
import { RestHoc as restHoc } from 'react-rest-resource'
import BookGenre from './BookGenre'
import { GenreService } from '../../../services'

const ConnectedComponent = restHoc(BookGenre, GenreService)
export default ({ genre }) => <ConnectedComponent genreId={genre} key={genre} />
