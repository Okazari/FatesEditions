import React from 'react'
// import styles from './style.scss'
import { Layout, Content, Toolbar, Tabs } from '../Layout'
import Library from './Library'

const tabNews = { label: 'Nouveautés', Component: () => <div>NEWS</div> }
const tabLibrary = { label: 'Bibliothèques', Component: Library }
const tabCommunity = { label: 'Communautés', Component: () => <div>Community</div> }
const tabList = [tabNews, tabLibrary, tabCommunity]

class Books extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tabs: tabList,
      selectedTab: tabLibrary,
    }
  }

  selectTab = (tab) => {
    this.setState({ selectedTab: tab })
  }

  render() {
    const { tabs, selectedTab } = this.state
    const { Component } = selectedTab
    return (
      <Layout>
        <Content>
          <Tabs tabs={tabs} selectedTab={selectedTab} onSelect={this.selectTab} />
          <Component />
        </Content>
        <Toolbar />
      </Layout>
    )
  }
}

export default Books
