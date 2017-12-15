//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import DraftGeneral from './DraftGeneral'
import { DraftService } from '../../../services'

const ConnectedComponent = restHoc(DraftGeneral, DraftService)
const Component = ({ params }) => {
  return <ConnectedComponent draftId={params.draftId} />
}
export default Component
