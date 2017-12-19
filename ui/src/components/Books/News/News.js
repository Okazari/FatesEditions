import React from 'react'
import styles from './style.scss'
import Book from '../common/Book'
import Showdown from './Showdown'

class News extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { books } = this.props
    const nbColumns = document && Math.floor((document.body.clientWidth - 200) / 240)
    // TODO Replace with loader
    if (!books) return null
    const booksCopy = [...books]
    const firstBook = booksCopy.shift()
    return (
      <div className={styles.component}>
        <Showdown bookId={firstBook} />
        <div className={styles.list}>
          {
            booksCopy.map((book, index) => {
              const delay = 50 * ((index % nbColumns) + Math.floor(index / nbColumns) + 1)
              return (
                <div
                  key={book}
                  className={styles.book}
                >
                  <span />
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

export default News
