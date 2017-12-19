//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import { PageService } from 'services'
import DraftPages from './DraftPages'

const ConnectedComponent = restHoc(DraftPages, PageService)
const Component = ({ params }) => {
  return <ConnectedComponent query={{ bookId: params.draftId }} />
}
export default Component
