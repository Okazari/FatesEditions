//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import Book from './Book'
import { DraftService } from '../../../../services'

const ConnectedComponent = restHoc(Book, DraftService)
const Component = ({ params }) => {
  return <ConnectedComponent draftId={params.bookId} />
}
export default Component
