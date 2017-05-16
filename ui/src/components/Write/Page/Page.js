import React from 'react'
import { Content } from 'components/App'
import styles from './styles.scss'
import PageInformation from './PageInformation'
import PageEffect from './PageEffect'
import PageMusic from './PageMusic'
import PageContent from './PageContent'
import PageTransition from './PageTransition'

const Page = ({page, updateResource}) => {
    return !page ? null :
    (
     <Content title="Edition de page" >
       <div className={styles.row}>
       <PageInformation page={page} updateResource={updateResource} />
       {/*<PageEffect updateResource={updateResource}/>
       <PageMusic/>
       <PageContent page={page}/>
       <PageTransition/>*/}
      </div>
    </Content>
    )
}

export default Page
