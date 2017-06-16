//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import DraftInformation from './DraftInformation'
import { DraftService } from '../../../../../services'

export default restHoc(DraftInformation, DraftService)
