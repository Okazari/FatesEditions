import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../../common/Box'
import { Button, Input, GroupInput, TextAreaInput } from '../../../common'
import BookCover from './BookCover'
import GenreList from './GenreList'
import PageList from './PageList'
import styles from './styles.scss'

class BookInformation extends React.Component {
  constructor(props) {
    super(props)
    const { draft } = this.props
    this.state = { draft }
  }

  componentWillUpdate(nextProps) {
    const { draft } = this.props
    if (draft !== nextProps.draft) {
      this.setState({ draft: nextProps.draft })
    }
  }

  updateDraft = (value) => {
    const { updateResource } = this.props
    const { draft } = this.state
    const newDraft = { ...draft, ...value }
    updateResource(newDraft)
    this.setState({ draft: newDraft })
  }

  render() {
    const { draft } = this.state
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
              <BookCover cover={draft.cover} />
              <GroupInput
                domProps={{
                  type: 'text',
                  value: draft.cover,
                  onChange: cover => this.updateDraft({ cover }),
                  placeholder: "url de l'image de couverture",
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
                  value: draft.name,
                  onChange: name => this.updateDraft({ name }),
                  type: 'text',
                  placeholder: 'Titre du livre',
                  required: true,
                }}
              />
              <GenreList
                domProps={{
                  value: draft.genreId,
                  required: true,
                  onChange: genreId => this.updateDraft({ genreId }),
                }}
              />
              <TextAreaInput
                label="Synopsis"
                debounce={500}
                domProps={{
                  value: draft.synopsis,
                  onChange: synopsis => this.updateDraft({ synopsis }),
                  placeholder: 'Synopsis du livre',
                  required: true,
                }}
              />
              <PageList
                query={{ bookId: draft._id }}
                domProps={{
                  value: draft.startingPageId,
                  required: true,
                  onChange: startingPageId => this.updateDraft({ startingPageId }),
                }}
              />
            </div>
          </BoxBody>
          <BoxFooter className={styles.centerFooter}>
            <Button>Essayer mon brouillon</Button>
          </BoxFooter>
        </Box>
      </div>
    )
  }
}

export default BookInformation
