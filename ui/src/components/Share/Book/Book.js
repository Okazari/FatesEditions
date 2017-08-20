import React from 'react'
import { Content } from '../../App'
import { Box, BoxHeader, BoxBody } from '../../common/Box'
import DraftList from './DraftList'
import BookInformation from './BookInformation'
import BookPublication from './BookPublication'
import styles from './styles.scss'

class Book extends React.Component {

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
      <Content title="Publier un livre" >
        <Box>
          <BoxHeader>
            <Box className="box-warning box-solid">
              <BoxHeader>
                <h4>Information importante</h4>
              </BoxHeader>
              <BoxBody>
                {'Publier l\'un de vos brouillon déplacera celui-ci dans la section "Partage". Les autres membres de MyVirtualStoryBook pourrons alors trouver votre histoire dans la liste des livres jouables. Il ne sera dès lors plus éditable à moins de le repasser en brouillon'}
              </BoxBody>
            </Box>
          </BoxHeader>
          <BoxBody className={styles.component}>
            <DraftList updateDraft={this.updateDraft} />
            {draftId !== '' ?
              <div className={styles.bookInformations} >
                <BookInformation draftId={draftId} key={`info${draftId}`} />
                <BookPublication draftId={draftId} key={`publ${draftId}`} />
              </div>
              : null}
          </BoxBody>
        </Box>
      </Content>
    )
  }
}

export default Book
