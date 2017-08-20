import React from 'react'
// eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import { PageService } from '../../../../../../services'

export default restHoc(({ page = {} }) => <span>{page.title}</span>, PageService)
