//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import { RawBook } from '../Book'
import { DraftService } from '../../../services'

export default restHoc(({ draft, ...rest }) => <RawBook book={draft} {...rest} />, DraftService)
