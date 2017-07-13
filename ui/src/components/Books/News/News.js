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
    const { drafts } = this.props
    const nbColumns = document && Math.floor((document.body.clientWidth - 200) / 240)
    // TODO Replace with loader
    if (!drafts) return null
    const draftsCopy = [...drafts]
    const firstDraft = draftsCopy.shift()
    return (
      <div className={styles.component}>
        <Showdown draftId={firstDraft} />
        <div className={styles.list}>
          {
            draftsCopy.map((book, index) => {
              const delay = 50 * ((index % nbColumns) + Math.floor(index / nbColumns) + 1)
              return (
                <div
                  key={book}
                  className={styles.book}
                >
                  <span />
                  <Book showDelay={delay} draftId={book} />
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
