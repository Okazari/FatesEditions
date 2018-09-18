import React from 'react'
import { Layout, GameContent, GameToolbar } from 'components/Layout'
import Game from 'components/Views/Game'

const TrialView = (props) => (
  <Layout>
    <GameToolbar />
    <GameContent>
      <Game {...props} />
    </GameContent>
  </Layout>
)

export default TrialView
