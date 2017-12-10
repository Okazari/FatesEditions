//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import Book from '../Book'
import { DraftService } from '../../../services'

export default restHoc(({ draft, ...rest }) => <Book book={draft} {...rest} />, DraftService)
