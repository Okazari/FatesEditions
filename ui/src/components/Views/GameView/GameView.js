import React from 'react'
import { Layout, Content, Panel, GameToolbar } from 'components/Layout'
import Game from 'components/Views/Game'

const GameView = (props) => {
  return (
    <Layout>
      <GameToolbar />
      <Panel />
      <Content>
        <Game {...props} />
      </Content>
    </Layout>
  )
}

export default GameView
