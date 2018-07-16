import React from 'react'
import { Layout, Content, TrialToolbar } from 'components/Layout'
import Game from 'components/Views/Game'

const TrialView = (props) => {
  return (
    <Layout>
      <TrialToolbar {...props} />
      <Content>
        <Game {...props} />
      </Content>
    </Layout>
  )
}

export default TrialView
