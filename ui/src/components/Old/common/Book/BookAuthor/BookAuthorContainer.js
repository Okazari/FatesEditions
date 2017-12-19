// eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import BookAuthor from './BookAuthor'
import { AuthorService } from '../../../../../services'

const ConnectedComponent = restHoc(BookAuthor, AuthorService)
export default ({ author }) => <ConnectedComponent authorId={author} key={author} />
