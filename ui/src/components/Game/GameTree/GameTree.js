import React from 'react'
import Node from './Node'
import styles from './styles.scss'

const GameTree = ({ nodes = [] }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={styles.component}
      preserveAspectRatio="true"
    >
      {nodes.map(node => <Node node={node} />)}
    </svg>
  )
}

export default GameTree
