import React from 'react'
import Page from './Page'
import { PageService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
const ConnectedComponent = restHoc(Page, PageService)
const Component = ({params}) => {
  return <ConnectedComponent query={params.bookId} pageId={params.pageId}/>
}
export default Component
