import React from 'react'
import { Layout, Content, TrialToolbar } from 'components/Layout'
import Game from 'components/Game'

const TrialView = (props) => {
  return (
    <Layout>
      <TrialToolbar />
      <Content>
        <Game {...props} />
      </Content>
    </Layout>
  )
}

export default TrialView
