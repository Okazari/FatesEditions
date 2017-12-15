//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import DraftStats from './DraftStats'
import { DraftService } from '../../../services'

const ConnectedComponent = restHoc(DraftStats, DraftService)
const Component = ({ params }) => {
  return <ConnectedComponent draftId={params.draftId} />
}
export default Component
