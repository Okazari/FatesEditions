import React from 'react'
import { Layout, Content, AppToolbar, Tabs, TabContent } from 'components/Layout'
import { RouteService } from 'services'

const tabDrafts = { label: 'Mes brouillons', link: RouteService.routes.writedrafts() }
const tabBooks = { label: 'Mes livres publiés', link: RouteService.routes.writepublications() }
const tabPublish = { label: 'Publier un livre', link: RouteService.routes.writepublish() }
const tabs = [tabDrafts, tabBooks, tabPublish]


const MyBooks = ({ location, children, loading }) => {
  return (
    <Layout>
      <AppToolbar />
      <Content>
        <Tabs tabs={tabs} selectedTab={location.pathname} />
        <TabContent>
          {!loading && children}
        </TabContent>
      </Content>
    </Layout>
  )
}

export default MyBooks
