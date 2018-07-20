import React from 'react'
import classnames from 'classnames'
import { ButtonIcon } from 'components/common'
import styles from './styles.scss'

class DraftPublication extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percentage: 0,
      error: false,
    }
  }

  onPublish = () => {
    this.interval = setInterval(this.updateProgressbar, 200)
  }

  updateProgressbar = () => {
    const { draft, onPublishBook } = this.props
    const { percentage } = this.state
    if (percentage < 100) {
      this.setState({ percentage: percentage + 20 })
    } else {
      clearInterval(this.interval)
      if (!draft.startingPageId) this.setState({ error: true })
      else {
        onPublishBook(draft.id)
      }
    }
  }

  render() {
    const { draft } = this.props
    const { percentage, error } = this.state
    let progressBarStyle = ''

    if (percentage >= 100) {
      progressBarStyle = 'progress-bar-success'
      if (error) progressBarStyle = 'progress-bar-danger'
    } else progressBarStyle = 'progress-bar-primary'

    const progressbarClassName = classnames(
      styles.progressbar,
      'progress-bar progress-bar-striped',
      progressBarStyle,
    )

    return !!draft && (
      <div className={styles.component}>
        <ButtonIcon
          className={styles.publicationBtn}
          subLabel={`Publier ${draft.name}`}
          icon="share"
          domProps={{ onClick: this.onPublish }}
        />
        <div className="progress active">
          <div className={progressbarClassName} style={{ width: `${percentage}%` }}>
            <span className="sr-only">{percentage}%</span>
          </div>
        </div>
        {
          percentage >= 100 && error &&
          <div className={styles.alertMessage}>
            <div>
              Format de livre incorrect
            </div>
            <div>
              Votre livre ne peux pas être publié en {"l'état"}.
              Actuellement la seule raison est {"d'avoir"} oublié de
              <span className={styles.emphasis}>définir une page de début à votre livre.</span>
              Si ce {"n'est"} pas le cas merci de contacter {"l'administrateur"}.
            </div>
          </div>
        }
      </div>
    )
  }
}

export default DraftPublication
