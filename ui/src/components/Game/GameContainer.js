//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import { GameService } from 'services'
import Game from './Game'

const ConnectedComponent = restHoc(Game, GameService)

export default ({ params }) => <ConnectedComponent gameId={params.gameId} key={params.gameId} />
