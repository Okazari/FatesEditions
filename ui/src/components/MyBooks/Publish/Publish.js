import React from 'react'
import DraftList from './DraftList'
import Draft from '../../common/Draft'
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
        <DraftList updateDraft={this.updateDraft} />
        {
          draftId && (
            <div className={styles.body} >
              <div className={styles.bookPreview}>
                <Draft draftId={draftId} />
              </div>
              <div className={styles.publish}>
                <BookPublication draftId={draftId} key={`publ${draftId}`} />
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Publish
