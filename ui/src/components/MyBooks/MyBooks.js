import React from 'react'
import { Layout, Content, Toolbar, Tabs, TabContent } from '../Layout'
import { RouteService } from '../../services'

const tabDrafts = { label: 'Mes brouillons', link: RouteService.routes.writedrafts() }
const tabBooks = { label: 'Mes livres publiés', link: RouteService.routes.writepublications() }
const tabPublish = { label: 'Publier un livre', link: RouteService.routes.writepublish() }
const tabs = [tabDrafts, tabBooks, tabPublish]


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
