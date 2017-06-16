//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import DraftPublication from './DraftPublication'
import { DraftService } from '../../../../../services'

export default restHoc(DraftPublication, DraftService)
