import React from 'react'
import { D3Service } from 'services'
import styles from './styles.scss';

const d3 = new D3Service('#pageGraph', 600, 400, styles);

const PageGraph = ({bookId}) => {
  return (
    <div id="pageGraph">{d3.getGraph(bookId)}</div>
  )}

export default PageGraph
