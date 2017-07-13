import React from 'react'
import classnames from 'classnames/bind'
import styles from './style.scss'
import Author from './Author'

const cx = classnames.bind(styles)

class Book extends React.Component {

  constructor(props) {
    super(props)
    this.state = { over: false, displayed: false }
    setTimeout(() => this.setState({ displayed: true }), props.showDelay)
  }

  toggleExpand = () => {
    const { expanded } = this.state
    this.setState({ expanded: !expanded })
  }

  render() {
    const { draft } = this.props
    const { expanded, displayed } = this.state
    // TODO Replace with loader
    if (!draft) return null
    const coverStyle = {
      backgroundImage: `url(${draft.cover})`,
    }
    const classes = cx(styles.component, {
      expanded,
      displayed,
    })
    return (
      <div
        onClick={this.toggleExpand}
        className={classes}
      >
        <div className={styles.cover}>
          <div className={styles.coverImage} style={coverStyle} />
          <div className={styles.content}>
            {draft.name}
            <Author authorId={draft.authorId} />
          </div>
        </div>
      </div>
    )
  }
}

export default Book
