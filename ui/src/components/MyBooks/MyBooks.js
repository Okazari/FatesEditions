import React from 'react'
// import styles from './style.scss'
import { Layout, Content, Toolbar, Tabs, TabContent } from '../Layout'
import { RouteService } from '../../services'

const tabDrafts = { label: 'Mes brouillons', link: RouteService.routes.writedrafts() }
const tabs = [tabDrafts]


const MyBooks = ({ location, children }) => {
  return (
    <Layout>
      <Toolbar />
      <Content>
        <Tabs tabs={tabs} selectedTab={location.pathname} />
        <TabContent>
          {children}
        </TabContent>
      </Content>
    </Layout>
  )
}

export default MyBooks