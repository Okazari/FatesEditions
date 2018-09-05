import React from 'react'
import { connect } from 'react-redux'
import { Layout, GameContent, Panel, GameToolbar } from 'components/Layout'
import { Inventory, DisplayStats, DisplayItems } from 'components/common'
import Game from 'components/Views/Game'

const mapStateToProps = ({ ui: { panelIsOpen, displayStats } }) => ({ panelIsOpen, displayStats })

const TrialView = (props) => {
  const { panelIsOpen, displayStats } = props
  return (
    <Layout>
      <GameToolbar />
      <GameContent>
        {
          panelIsOpen &&
          <Panel>
            <Inventory>
              { displayStats
                ? <DisplayStats />
                : <DisplayItems />
              }
            </Inventory>
          </Panel>
        }
        <Game {...props} />
      </GameContent>
    </Layout>
  )
}

export default connect(mapStateToProps)(TrialView)
