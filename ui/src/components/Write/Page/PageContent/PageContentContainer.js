//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import { PageService } from 'services'
import PageContent from './PageContent'

const ConnectedComponent = restHoc(PageContent, PageService)
const Component = ({ params }) => {
  return <ConnectedComponent bookId={params.draftId} pageId={params.pageId} />
}
export default Component
