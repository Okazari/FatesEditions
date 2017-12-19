//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import EffectRow from './EffectRow'
import { BookService } from '../../../../../../services'

const ConnectedComponent = restHoc(EffectRow, BookService)
export default ({ bookId, effect, index, updateResource, removeEffect }) => <ConnectedComponent
  bookId={bookId}
  key={bookId}
  index={index}
  effect={effect}
  updateResource={updateResource}
  removeEffect={removeEffect}
/>
