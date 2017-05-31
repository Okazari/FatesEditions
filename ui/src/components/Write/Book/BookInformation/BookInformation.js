import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../../common/Box'
import { Button, LabelInput, GroupInput, TextAreaInput } from '../../../common'
import BookCover from './BookCover'
import GenreList from './GenreList'
import PageList from './PageList'
import styles from './styles.scss'

const BookInformation = ({ draft = {}, updateResource }) => {
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
              resource={draft}
              resourceHandler={updateResource}
              domProps={{
                type: 'text',
                name: 'cover',
                placeholder: "url de l'image de couverture",
                required: true,
              }}
            >
              <span>URL</span>
            </GroupInput>
          </div>
          <div className={styles.bookInformation}>
            <LabelInput
              label="Titre"
              resource={draft}
              resourceHandler={updateResource}
              domProps={{
                type: 'text',
                name: 'name',
                placeholder: 'Titre du livre',
                required: true,
              }}
            />
            <GenreList
              defaultValue={draft.genreId}
              resource={draft}
              resourceHandler={updateResource}
              domProps={{ name: 'genre', required: true }}
            />
            <TextAreaInput
              label="Synopsis"
              resource={draft}
              resourceHandler={updateResource}
              domProps={{ name: 'synopsis', placeholder: 'Synopsis du livre', required: true }}
            />
            <PageList
              query={{ bookId: draft._id }}
              defaultValue={draft.startingPageId}
              resource={draft}
              resourceHandler={updateResource}
              dompProps={{ name: 'startingPageId', required: true }}
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

export default BookInformation
