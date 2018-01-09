import React from 'react'
import Book from 'components/common/Book'
import styles from './style.scss'
import Showdown from './Showdown'

class News extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { books } = this.props
    const nbColumns = document && Math.floor((document.body.clientWidth - 100) / 240)
    // TODO Replace with loader
    if (!books) return null
    const booksCopy = [...books]
    const firstBook = booksCopy.shift()
    return (
      <div className={styles.component}>
        <Showdown book={firstBook} />
        <div className={styles.list}>
          {
            booksCopy.map((book, index) => {
              const delay = 100 * ((index % nbColumns) + Math.floor(index / nbColumns) + 1)
              return (
                <div
                  key={book.id}
                  className={styles.book}
                >
                  <span />
                  <Book showDelay={delay} book={book} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default News
