import React from 'react'
// import styles from './style.scss'
import { Layout, Content, Toolbar, Tabs } from '../Layout'
import { RouteService } from '../../services'

const tabNews = { label: 'Nouveautés', link: RouteService.routes.booksnews() }
const tabLibrary = { label: 'Bibliothèques', link: RouteService.routes.bookslibrary() }
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
    const { tabs } = this.state
    const { location, children } = this.props
    return (
      <Layout>
        <Content>
          <Tabs tabs={tabs} selectedTab={location.pathname} onSelect={this.selectTab} />
          {children}
        </Content>
        <Toolbar />
      </Layout>
    )
  }
}

export default Books
