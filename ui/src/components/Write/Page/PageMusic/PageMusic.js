import React from 'react'
import { Box, BoxHeader, BoxBody } from '../../../common/Box'
import { Button, GroupInput } from '../../../common'
import styles from './styles.scss'

class PageMusic extends React.Component {
  constructor(props) {
    super(props)
    const {page} = this.props
    this.state = {page}
  }

  componentWillUpdate(nextProps) {
    const {page} = this.props
    if (page !== nextProps.page) {
      this.setState({ page: nextProps.page })
    }
  }

  updatePage = (value) => {
    const {updateResource} = this.props
    const {page} = this.state
    const newPage = { ...page, ...value }
    updateResource(newPage)
    this.setState({ page: newPage })
  }

  render() {
    const {page} = this.state
    return (
      <div>
        <Box className="box-primary">
          <BoxHeader withBorder>
            <h3 className="box-title">Musique de fond</h3>
            <div className="box-tools pull-right">
              <div className="btn-group" />
            </div>
          </BoxHeader>
          <BoxBody>
            <div className={styles.component}>
              <GroupInput
                label="Lien SoundCloud"
                domProps={{
                  placeholder: 'Lien SoundCloud de votre musique de fond',
                  value: page.backgroundMusic,
                  onChange: backgroundMusic => this.updatePage({ backgroundMusic }),
                }}
              >
                <Button ><i className="fa fa-close" /></Button>
              </GroupInput>
            </div>
          </BoxBody>
        </Box>
      </div>
    )
  }
}

export default PageMusic
