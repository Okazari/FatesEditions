import React from 'react'
import classnames from 'classnames'
import { Box, BoxHeader, BoxBody } from '../../../common/Box'
import styles from './styles.scss'

class DraftPublication extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percentage: 0,
      error: false,
    }
  }

  interval = null

  updateProgressbar = () => {
    const { draft, updateResource } = this.props
    const { percentage } = this.state
    if (percentage < 100) this.setState({ percentage: percentage + 20 })
    else {
      clearInterval(this.interval)
      if (!draft.startingPageId) this.setState({ error: true })
      else {
        draft.draft = false
        updateResource(draft)
      }
    }
  }

  render() {
    const { draft } = this.props
    const { percentage, error } = this.state
    let progressBarStyle = ''

    if (error) progressBarStyle = 'progress-bar-danger'
    else if (percentage >= 100) progressBarStyle = 'progress-bar-success'
    else progressBarStyle = 'progress-bar-primary'

    const boxClassName = classnames(styles.component, 'box-primary')
    const progressbarClassName = classnames(
      styles.progressbar,
      'progress-bar progress-bar-striped',
      progressBarStyle,
    )

    return !!draft && (
      <Box className={boxClassName}>
        <BoxHeader withBorder>
          <h4>Publiez le !</h4>
        </BoxHeader>
        <BoxBody className={styles.body}>
          <div className={styles.publicationBtn}>
            <a className="btn btn-app" onClick={() => { this.interval = setInterval(this.updateProgressbar, 500) }}><i className="fa fa-share-alt" />Publier {draft.name}</a>
          </div>
          <div className="progress active">
            <div className={progressbarClassName} style={{ width: `${percentage}%` }}>
              <span className="sr-only">{percentage}%</span>
            </div>
          </div>
          { error ?
            <Box className="box-danger box-solid md-whiteframe-z1">
              <BoxHeader>
                Format de livre incorrect
              </BoxHeader>
              <BoxBody>
                {'Votre livre ne peux pas être publié en l\'état. Actuellement la seule raison est d\'avoir oublié de définir une page de début à votre livre. Si ce n\'est pas le cas merci de contacter l\'administrateur.'}
              </BoxBody>
            </Box>
          : null }
        </BoxBody>
      </Box>
    )
  }
}

export default DraftPublication
