import React from 'react'
import styles from './style.scss'
import Book from './Book'

class Library extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { drafts } = this.props

    // TODO Replace with loader
    if (!drafts) return null
    return (
      <div className={styles.component}>
        {
          drafts.map((book, index) => (
            <div
              key={book}
              className={styles.book}
            >
              <Book showDelay={100 * (index + 1)} draftId={book} />
            </div>
          ))
        }
      </div>
    )
  }
}

export default Library
