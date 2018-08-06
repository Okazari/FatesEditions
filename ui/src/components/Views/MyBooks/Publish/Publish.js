import React from 'react'
import { Book, BookWrapper, AlertMessage, Emphasis } from 'components/common'
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
    const { author = {}, publishBook, error } = this.props
    const drafts = author.drafts
    const draft = drafts && drafts.find(d => d.id === draftId)
    return (
      <div>
        <AlertMessage title={'Information importante'}>
          <Emphasis>Publier</Emphasis>
          {"l'un"} de vos brouillon déplacera celui-ci dans la section
          <Emphasis>Mes livres publiés.</Emphasis>
          Les autres membres pourrons alors trouver votre
          histoire dans la liste des
          <Emphasis>livres jouables.</Emphasis>
          Il ne sera dès lors
          <Emphasis>plus éditable</Emphasis>
          à moins de le repasser en brouillon.
        </AlertMessage>
        <div className={styles.component}>
          <DraftList drafts={drafts} updateDraft={this.updateDraft} />
          {
            draft && (
              <div className={styles.body} >
                <div className={styles.bookPreview}>
                  <BookWrapper>
                    <Book book={draft} />
                  </BookWrapper>
                </div>
                <div className={styles.publish}>
                  <BookPublication onPublishBook={publishBook} draft={draft} error={error} key={`publ${draft.id}`} />
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Publish
