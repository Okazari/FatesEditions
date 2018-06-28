import React from 'react'
import classnames from 'classnames/bind'
import styles from './style.scss'
import Author from './Author'

const cx = classnames.bind(styles)

class Book extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
    const { showDelay, onShow } = props
    this.state = { over: false, displayed: false }
    setTimeout(() => {
      this.setState({ displayed: true })
      if (onShow) onShow()
    }, showDelay)
  }

  toggleExpand = () => {
    const { expanded } = this.state
    this.setState({ expanded: !expanded })
  }

  render() {
    const { book, onClick } = this.props
    const { expanded, displayed } = this.state
    // TODO Replace with loader
    if (!book) return null
    const coverStyle = {
      backgroundImage: `url(${book.cover})`,
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
        <div className={styles.cover} onClick={() => onClick && onClick(book.id)}>
          <div className={styles.coverImage} style={coverStyle} />
          <div className={styles.content}>
            <div className={styles.contentTitle}>
              <div className={styles.bookName}>
                {book.name || 'Livre sans titre'}
              </div>
              <Author author={book.author} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Book
