//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import TransitionRow from './TransitionRow'
import { BookService } from '../../../../../services'

const ConnectedComponent = restHoc(TransitionRow, BookService)
export default ({ transition,
                  index,
                  bookId,
                  currentPageId,
                  updateResource,
                  postResource,
                  removeTransition }) =>
                    <ConnectedComponent
                      transition={transition}
                      index={index}
                      bookId={bookId}
                      key={bookId}
                      currentPageId={currentPageId}
                      updateResource={updateResource}
                      postResource={postResource}
                      removeTransition={removeTransition}
                    />
