import React from 'react'
import styles from './style.scss'
import Draft from '../common/Draft'

class Drafts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { drafts } = this.props
    const nbColumns = document && Math.floor((document.body.clientWidth - 200) / 240)
    // TODO Replace with loader
    if (!drafts) return null
    return (
      <div className={styles.component}>
        <div className={styles.list}>
          {
            drafts.map((draft, index) => {
              const delay = 50 * ((index % nbColumns) + Math.floor(index / nbColumns) + 1)
              return (
                <div
                  key={draft}
                  className={styles.book}
                >
                  <Draft showDelay={delay} draftId={draft} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Drafts
