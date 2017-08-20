//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import Draft from './Draft'
import { DraftService } from '../../../services'

const ConnectedComponent = restHoc(Draft, DraftService)
const Component = ({ params }) => {
  return <ConnectedComponent draftId={params.draftId} />
}
export default Component
