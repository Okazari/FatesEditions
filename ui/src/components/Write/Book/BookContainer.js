import React from 'react'
import Book from './Book'
import { DraftService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
const ConnectedComponent = restHoc(Book, DraftService)
const Component = ({params}) => {
  return <ConnectedComponent draftId={params.bookId}/>
}
export default Component
