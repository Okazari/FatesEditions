import React from 'react'
import { Content } from '../../Layout'
import DraftInformation from '../common/DraftInformation'

import {
  // DraftInformation,
  // DraftStat,
  // DraftItem,
  // DraftGraph,
  // DraftPage,
} from '../common/Draft'
import styles from './styles.scss'

// <DraftStat book={draft} updateResource={updateResource} />
// <DraftItem book={draft} updateResource={updateResource} />
// <DraftGraph book={draft} />
// <DraftPage query={{ bookId: draft._id }} />
const Draft = ({ draft, updateResource }) => {
  return !!draft && (
    <Content>
      <div className={styles.component}>
        <DraftInformation book={draft} updateResource={updateResource} />
        <div className={styles.row}>
        </div>
      </div>
    </Content>
  )
}

export default Draft
