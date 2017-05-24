import React from 'react'
import { Content } from '../../App'
import styles from './styles.scss'
import PageInformation from './PageInformation'
import PageEffect from './PageEffect'

const Page = ({ query, page, updateResource }) => {
  return !page ? null : (
    <Content title="Edition de page" >
      <div className={styles.row}>
        <PageInformation page={page} updateResource={updateResource} />
        <PageEffect bookId={query} page={page} updateResource={updateResource} />
      </div>
    </Content>
  )
}

export default Page
