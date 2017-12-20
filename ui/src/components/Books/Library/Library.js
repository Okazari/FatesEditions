import React from 'react'
import styles from './style.scss'
import Book from '../common/Book'

class Library extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { books } = this.props
    const nbColumns = document && Math.floor((document.body.clientWidth - 100) / 240)
    // TODO Replace with loader
    if (!books) return null
    return (
      <div className={styles.component}>
        <div className={styles.list}>
          {
            books.map((book, index) => {
              const delay = 100 * ((index % nbColumns) + Math.floor(index / nbColumns) + 1)
              return (
                <div
                  key={book}
                  className={styles.book}
                >
                  <Book showDelay={delay} bookId={book} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Library
