import React from 'react'
// eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import { GenreService } from '../../../../../../services'

export default restHoc(({ genre = {} }) => <span>{genre.name}</span>, GenreService)
