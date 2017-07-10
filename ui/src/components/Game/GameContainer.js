//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import Book from './Game'
import { GameService } from '../../services'

const ConnectedComponent = restHoc(Book, GameService)

export default ({ params }) => <ConnectedComponent gameId={params.gameId} key={params.gameId} />
