import React from 'react'
import classnames from 'classnames'
import { Box, BoxHeader, BoxBody } from '../../../common/Box'
import styles from './styles.scss'

class DraftPublication extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percentage: 0,
    }
  }

  interval = null

  updateProgressbar = () => {
    const { draft, updateResource } = this.props
    const { percentage } = this.state
    if (percentage < 100) this.setState({ percentage: percentage + 20 })
    else {
      clearInterval(this.interval)
      draft.draft = false
      updateResource(draft)
    }
  }

  render() {
    const { draft } = this.props
    const { percentage } = this.state
    const boxClassName = classnames(styles.component, 'box-primary')
    const progressbarClassName = classnames(
      styles.progressbar,
      'progress-bar progress-bar-striped',
      percentage >= 100 ? 'progress-bar-success' : 'progress-bar-primary',
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
        </BoxBody>
      </Box>
    )
  }
}

export default DraftPublication
