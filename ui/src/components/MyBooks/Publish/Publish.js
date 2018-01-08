import React from 'react'
import { Book } from 'components/common'
import DraftList from './DraftList'
import BookPublication from './BookPublication'
import styles from './styles.scss'

class Publish extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      draftId: '',
    }
  }

  updateDraft = (draftId) => {
    if (draftId !== this.state.draftId) {
      this.setState({ draftId })
    }
  }

  render() {
    const { draftId } = this.state
    const { drafts } = this.props
    const draft = drafts && drafts.find(d => d.id === draftId)
    return (
      <div className={styles.component}>
        <div className={styles.alertMessage}>
          <h4 className={styles.alertTitle}>
            Information importante
          </h4>
          <div>
            <span className={styles.emphasis}>Publier</span>
            {"l'un"} de vos brouillon déplacera celui-ci dans la section
            <span className={styles.emphasis}>Mes livres publiés.</span>
            Les autres membres pourrons alors trouver votre
            histoire dans la liste des
            <span className={styles.emphasis}>livres jouables.</span>
            Il ne sera dès lors
            <span className={styles.emphasis}>plus éditable</span>
            à moins de le repasser en brouillon
          </div>
        </div>
        <DraftList drafts={drafts} updateDraft={this.updateDraft} />
        {
          draft && (
            <div className={styles.body} >
              <div className={styles.bookPreview}>
                <Book book={draft} />
              </div>
              <div className={styles.publish}>
                <BookPublication draft={draft} key={`publ${draft.id}`} />
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Publish
