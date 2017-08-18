import React from 'react'
import Node from './Node'
import styles from './styles.scss'

class GameTree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNode: {},
      currentLevel: 0,
      gameTree: [],
    }
  }

  componentWillMount() {
    const { game: { book } } = this.props
    this.generateTree(book.startingPageId)
  }

  componentWillUpdate(nextProps) {
    const { game, hoverNode, currentPageId, updateResource } = this.props
    const { currentNode } = this.state

    if (nextProps.currentPageId !== currentPageId) {
      console.log(game.tree)
      game.tree.push({ from: currentPageId, to: nextProps.currentPageId })
      updateResource(game)
      this.generateTree(nextProps.currentPageId)
    }
    if (nextProps.hoverNode !== hoverNode) {
      let subNode
      if (nextProps.hoverNode) {
        subNode = currentNode.nodes.find(nestedNode => nestedNode.id === nextProps.hoverNode)
      } else {
        subNode = currentNode.nodes.find(nestedNode => nestedNode.id === hoverNode)
      }
      if (subNode) subNode.hover = nextProps.hoverNode !== null
    }
  }

  generateTree = (targetPageId) => {
    const { game: { book } } = this.props
    this.setState(
      { gameTree: [this.generateTreeNode(50, 10, 0, book.startingPageId, targetPageId)] })
  }

  generateTreeNode = (posX, posY, level, pageId, targetPageId, subTree = true) => {
    const { game: { book, path } } = this.props
    const nextLevel = level + 1
    const page = book.pages.find(bookPage => bookPage._id === pageId)
    const node = {
      id: page._id,
      name: page.title,
      nodes: [],
      posX,
      posY,
    }

    if (path) node.linkedTo = path[pageId]

    if (subTree) {
      page.transitions.forEach((transition, index) => {
        const posXOffset = (index * 10) + posX
        const posYOffset = (posY / nextLevel) + posY
        node.nodes.push(
          this.generateTreeNode(
            posXOffset,
            posYOffset,
            nextLevel,
            transition.toPage,
            targetPageId,
            pageId !== targetPageId,
          ),
        )
      })
    }

    if (pageId === targetPageId) {
      this.setState({ currentNode: node })
    }

    return node
  }

  render() {
    const { gameTree } = this.state
    return (
      <svg
        viewBox="0 0 100 100"
        className={styles.component}
        preserveAspectRatio="true"
      >
        {gameTree.map(node => <Node node={node} />)}
      </svg>
    )
  }
}

export default GameTree
