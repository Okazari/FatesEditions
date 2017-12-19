//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import { BookService } from 'services'
import EffectRow from './EffectRow'

const ConnectedComponent = restHoc(EffectRow, BookService)
export default ({ bookId, effect, index, updateResource, removeEffect }) => <ConnectedComponent
  bookId={bookId}
  key={bookId}
  index={index}
  effect={effect}
  updateResource={updateResource}
  removeEffect={removeEffect}
/>
