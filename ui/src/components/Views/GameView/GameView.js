import React from 'react'
import { Layout, Content, GameToolbar } from 'components/Layout'
import Game from 'components/Views/Game'

const GameView = (props) => {
  return (
    <Layout>
      <GameToolbar />
      <Content>
        <Game {...props} />
      </Content>
    </Layout>
  )
}

export default GameView
