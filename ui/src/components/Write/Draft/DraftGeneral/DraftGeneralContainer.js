//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import { DraftService } from 'services'
import DraftGeneral from './DraftGeneral'

const ConnectedComponent = restHoc(DraftGeneral, DraftService)
const Component = ({ params }) => {
  return <ConnectedComponent draftId={params.draftId} />
}
export default Component
