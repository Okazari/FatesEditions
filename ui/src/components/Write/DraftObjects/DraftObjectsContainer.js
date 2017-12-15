//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import DraftObjects from './DraftObjects'
import { DraftService } from '../../../services'

const ConnectedComponent = restHoc(DraftObjects, DraftService)
const Component = ({ params }) => {
  return <ConnectedComponent draftId={params.draftId} />
}
export default Component
