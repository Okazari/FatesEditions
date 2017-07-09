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
    const nbColumns = document && Math.floor((document.body.clientWidth - 200) / 240)
    console.log(nbColumns)
    // TODO Replace with loader
    if (!drafts) return null
    return (
      <div className={styles.component} ref={library => this.library = library}>
        {
          drafts.map((book, index) => {
            const delay = 50 * ((index % nbColumns) + Math.floor(index / nbColumns) + 1)
            return (
              <div
                key={book}
                className={styles.book}
              >
                <Book showDelay={delay} draftId={book} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Library
