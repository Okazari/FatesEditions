//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import TransitionRow from './TransitionRow'
import { BookService } from '../../../../../services'

const ConnectedComponent = restHoc(TransitionRow, BookService)
export default ({ bookId,
                  pageId,
                  transition,
                  index,
                  updateResource,
                  postResource,
                  removeTransition }) =>
                    <ConnectedComponent
                      bookId={bookId}
                      key={bookId}
                      pageId={pageId}
                      transition={transition}
                      index={index}
                      updateResource={updateResource}
                      postResource={postResource}
                      removeTransition={removeTransition}
                    />
