import React from 'react'
import { Content } from '../../App'
import styles from './styles.scss'
import PageInformation from './PageInformation'

const Page = ({ page, updateResource }) => {
  if (!page) return null
  return (
    <Content title="Edition de page" >
      <div className={styles.row}>
        <PageInformation page={page} updateResource={updateResource} />
      </div>
    </Content>
  )
}

export default Page
