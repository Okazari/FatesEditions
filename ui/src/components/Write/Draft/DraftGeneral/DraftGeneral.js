import React from 'react'
import { Button, Input, Book, TextAreaInput } from 'components/common'
import { GameService, RouteService } from 'services'
import GenreList from './GenreList'
import PageList from './PageList'
import styles from './styles.scss'

// const tryGame = (book) => {
//   const stats = book.stats.reduce((acc, stat) => {
//     return {
//       ...acc,
//       [stat._id]: stat.initValue,
//     }
//   }, {})
//   GameService.postResource({ book, currentPageId: book.startingPageId, stats }).then((game) => {
//     RouteService.goTo(RouteService.routes.trialgame(game._id))
//   })
// }

const tryGame = book => RouteService.goTo(RouteService.routes.trialgame(book.id))

const DraftGeneral = ({ book, genres, updateBook, disabled = false }) => {
  return !!book && (
    <div>
      <div className={styles.component}>
        <div className={styles.bookCover}>
          <Book book={book} />
        </div>
        <div className={styles.bookInformation}>
          <Input
            label="Titre"
            debounce={500}
            domProps={{
              value: book.name,
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
            domProps={{
              value: book.cover,
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
              value: book.genreId,
              required: true,
              onChange: genreId => updateBook({ genreId }),
            }}
          />
          <TextAreaInput
            label="Synopsis"
            debounce={500}
            domProps={{
              value: book.synopsis,
              onChange: synopsis => updateBook({ synopsis }),
              placeholder: 'Synopsis du livre',
              required: true,
            }}
          />
          <PageList
            pages={book.pages}
            domProps={{
              value: book.startingPageId,
              required: true,
              onChange: startingPageId => updateBook({ startingPageId }),
            }}
          />
          <Button domProps={{ onClick: () => { tryGame(book) } }}>Essayer mon brouillon</Button>
        </div>
      </div>
    </div>
  )
}

export default DraftGeneral
