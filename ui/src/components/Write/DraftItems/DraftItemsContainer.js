//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import DraftItems from './DraftItems'
import { DraftService } from '../../../services'

const ConnectedComponent = restHoc(DraftItems, DraftService)
const Component = ({ params }) => {
  return <ConnectedComponent draftId={params.draftId} />
}
export default Component
