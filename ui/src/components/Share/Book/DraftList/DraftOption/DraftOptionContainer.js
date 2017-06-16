//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import DraftOption from './DraftOption'
import { DraftService } from '../../../../../services'

export default restHoc(DraftOption, DraftService)
