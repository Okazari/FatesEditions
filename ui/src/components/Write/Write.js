import React from 'react'
// import styles from './style.scss'
import { Layout, Content, Toolbar, Tabs } from '../Layout'

const tabNews = { label: 'Nouveautés', Component: () => <div>Bla</div> }
const tabLibrary = { label: 'Bibliothèques', Component: () => <div>BlaBla</div> }
const tabList = [tabNews, tabLibrary]

class Books extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tabs: tabList,
      selectedTab: tabNews,
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
