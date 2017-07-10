import React from 'react'
import { D3Service } from '../../../../../services'
import styles from './styles.scss'

const d3 = new D3Service('#pageGraph', 600, 400, styles)

const PageGraph = ({ draftId }) => {
  return (
    <div id="pageGraph">{d3.getGraph(draftId)}</div>
  )
}

export default PageGraph
