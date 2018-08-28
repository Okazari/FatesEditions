import React from 'react'
import { connect } from 'react-redux'
import { Layout, GameContent, Panel, TrialToolbar } from 'components/Layout'
import { Inventory, DisplayStats } from 'components/common'
import Game from 'components/Views/Game'

const mapStateToProps = ({ ui: { panelIsOpen } }) => ({ panelIsOpen })

const TrialView = (props) => {
  const { panelIsOpen } = props
  return (
    <Layout>
      <TrialToolbar />
      <GameContent>
        {
          panelIsOpen &&
          <Panel>
            <Inventory>
              <DisplayStats />
            </Inventory>
          </Panel>
        }
        <Game {...props} />
      </GameContent>
    </Layout>
  )
}

export default connect(mapStateToProps)(TrialView)
