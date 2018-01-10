import React from 'react'
import { Button, Input, Book, TextAreaInput } from 'components/common'
import { GameService, RouteService } from 'services'
import GenreList from './GenreList'
import PageList from './PageList'
import styles from './styles.scss'

const startGame = (book) => {
  const stats = book.stats.reduce((acc, stat) => {
    return {
      ...acc,
      [stat._id]: stat.initValue,
    }
  }, {})
  GameService.postResource({ book, currentPageId: book.startingPageId, stats }).then((game) => {
    RouteService.goTo(RouteService.routes.playgame(game._id))
  })
}


// static PropTypes = {
//   draft: {
//     NameInput.PopTypes.name,
//     cover: String,
//     description,
//     startingPageId,
//   }
// }
const DraftGeneral = ({ draft, genres, updateBook, disabled = false }) => {
  return !!draft && (
    <div>
      <div className={styles.component}>
        <div className={styles.bookCover}>
          <Book book={draft} />
        </div>
        <div className={styles.bookInformation}>
          <Input
            label="Titre"
            debounce={500}
            className={styles.input}
            domProps={{
              value: draft.name,
              onChange: name => updateBook({ name }),
              type: 'text',
              placeholder: 'Titre du livre',
              disabled,
              required: true,
            }}
          />
          <Input
            label="Url de l'image"
            debounce={500}
            className={styles.input}
            domProps={{
              value: draft.cover,
              onChange: cover => updateBook({ cover }),
              type: 'text',
              placeholder: "url de l'image de couverture",
              disabled,
              required: true,
            }}
          />
          <GenreList
            genres={genres}
            domProps={{
              value: draft.genreId,
              required: true,
              onChange: genreId => updateBook({ genreId }),
            }}
          />
          <TextAreaInput
            label="Synopsis"
            debounce={500}
            domProps={{
              value: draft.synopsis,
              onChange: synopsis => updateBook({ synopsis }),
              placeholder: 'Synopsis du livre',
              required: true,
            }}
          />
          <PageList
            pages={draft.pages}
            domProps={{
              value: draft.startingPageId,
              required: true,
              onChange: startingPageId => updateBook({ startingPageId }),
            }}
          />
          <Button domProps={{ onClick: () => { startGame(draft) } }}>Essayer mon brouillon</Button>
        </div>
      </div>
    </div>
  )
}

export default DraftGeneral
