import React from 'react'
// import styles from './style.scss'
import { Layout, Content, Toolbar, Tabs } from '../Layout'
import { RouteService } from '../../services'

// <DraftStat book={draft} updateResource={updateResource} />
// <DraftItem book={draft} updateResource={updateResource} />
// <DraftGraph book={draft} />
// <DraftPage query={{ bookId: draft._id }} />

const tabInfos = { label: 'Général', link: RouteService.routes.writedrafts() }
const tabStats = { label: 'Statistiques', link: RouteService.routes.writedrafts() }
const tabItems = { label: 'Objets et compétences', link: RouteService.routes.writedrafts() }
const tabPages = { label: 'Pages', link: RouteService.routes.writedrafts() }
const tabs = [tabInfos, tabStats, tabItems, tabPages]


const MyBooks = ({ location, children }) => {
  return (
    <Layout>
      <Toolbar />
      <Content>
        <Tabs tabs={tabs} selectedTab={location.pathname} />
        {children}
      </Content>
    </Layout>
  )
}

export default MyBooks
