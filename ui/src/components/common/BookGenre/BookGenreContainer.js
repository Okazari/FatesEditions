//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import BookGenre from './BookGenre'
import { GenreService } from '../../../services'

const ConnectedComponent = restHoc(BookGenre, GenreService)
export default ({ genre }) => <ConnectedComponent genreId={genre} key={genre} />
