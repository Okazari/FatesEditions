import React from 'react'
import { Content } from '../../App'
import styles from './styles.scss'
import PageInformation from './PageInformation'
import PageEffect from './PageEffect'
import PageMusic from './PageMusic'
import PageContent from './PageContent'
import PageTransition from './PageTransition'

const Page = ({ query, page, updateResource, postResource }) => {
  return !page ? null : (
    <Content title="Edition de page" >
      <div className={styles.row}>
        <PageInformation page={page} updateResource={updateResource} />
        <PageEffect bookId={query} page={page} updateResource={updateResource} />
        <PageMusic page={page} updateResource={updateResource} />
        <PageContent page={page} updateResource={updateResource} />
        <PageTransition
          bookId={query}
          page={page}
          updateResource={updateResource}
          postResource={postResource}
        />
      </div>
    </Content>
  )
}

export default Page
