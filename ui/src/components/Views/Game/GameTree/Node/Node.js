import React from 'react'
import styles from './styles.scss'

const Node = ({ parent, node }) => {
  return (
    <g className={node.hover ? styles.hover : null}>
      <text x={node.posX + 2} y={node.posY + 1} fontSize={2} >
        {node.name}
      </text>
      {parent ?
        <line
          x1={parent.posX}
          y1={parent.posY}
          x2={node.posX}
          y2={node.posY}
          className={parent.linkedTo === node.id ? styles.path : styles.line}
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
