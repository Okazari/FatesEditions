import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../../common/Box'
import { Button, Input, GroupInput, TextAreaInput } from '../../../common'
import BookCover from './BookCover'
import GenreList from './GenreList'
import PageList from './PageList'
import Game from '../../../../GameView'
import styles from './styles.scss'

class BookInformation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tryingDraft: false,
    }
  }

  tryDraft = () => {
    this.setState({ tryingDraft: true })
  }

  stopTryDraft = () => {
    this.setState({ tryingDraft: false })
  }

  render() {
    const { book, disabled, updateResource } = this.props
    const { tryingDraft } = this.state
    return (
      <div className={styles.component}>
        <Box className="box-primary">
          <BoxHeader withBorder>
            <h3 className="box-title">Information générales</h3>
            <div className="box-tools pull-right">
              <div className="btn-group">
                <span className="label label-danger md-whiteframe-z1"><i className="fa fa-pencil" /> Brouillon</span>
              </div>
            </div>
          </BoxHeader>
          <BoxBody>
            <div className={styles.bookCover}>
              <BookCover cover={book.cover} />
              <GroupInput
                domProps={{
                  type: 'text',
                  value: book.cover,
                  onChange: cover => updateResource({ ...book, cover }),
                  placeholder: "url de l'image de couverture",
                  disabled,
                  required: true,
                }}
              >
                <span>URL</span>
              </GroupInput>
            </div>
            <div className={styles.bookInformation}>
              <Input
                label="Titre"
                debounce={500}
                domProps={{
                  value: book.name,
                  onChange: name => updateResource({ ...book, name }),
                  type: 'text',
                  placeholder: 'Titre du livre',
                  disabled,
                  required: true,
                }}
              />
              <GenreList
                domProps={{
                  value: book.genreId,
                  required: true,
                  onChange: genreId => updateResource({ ...book, genreId }),
                }}
              />
              <TextAreaInput
                label="Synopsis"
                debounce={500}
                domProps={{
                  value: book.synopsis,
                  onChange: synopsis => updateResource({ ...book, synopsis }),
                  placeholder: 'Synopsis du livre',
                  required: true,
                }}
              />
              <PageList
                query={{ bookId: book._id }}
                domProps={{
                  value: book.startingPageId,
                  required: true,
                  onChange: startingPageId => updateResource({ ...book, startingPageId }),
                }}
              />
            </div>
          </BoxBody>
          <BoxFooter className={styles.centerFooter}>
            <Button domProps={{ onClick: this.tryDraft }}>Essayer mon brouillon</Button>
            { tryingDraft && <Game book={book} onClose={this.stopTryDraft} /> }
          </BoxFooter>
        </Box>
      </div>
    )
  }
}

export default BookInformation
