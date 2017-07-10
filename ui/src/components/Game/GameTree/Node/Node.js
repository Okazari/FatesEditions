import React from 'react'
import styles from './styles.scss'

const Node = ({ parent, node }) => {
  return (
    <g>
      <text x={node.posX + 2} y={node.posY + 1} fontSize={2} >
        {node.name}
      </text>
      {parent ?
        <line
          x1={parent.posX}
          y1={parent.posY}
          x2={node.posX}
          y2={node.posY}
          className={parent.path === node.name ? styles.path : styles.line}
        />
      : null}
      {node.nodes.map(subNode => <Node parent={node} node={subNode} />)}
      <circle
        cx={node.posX}
        cy={node.posY}
        r="1"
      />
    </g>
  )
}

export default Node
