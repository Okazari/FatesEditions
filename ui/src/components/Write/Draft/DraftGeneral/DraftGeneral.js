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


const DraftGeneral = ({ draft, updateResource, disabled = false }) => {
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
              onChange: name => updateResource({ ...draft, name }),
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
              onChange: cover => updateResource({ ...draft, cover }),
              type: 'text',
              placeholder: "url de l'image de couverture",
              disabled,
              required: true,
            }}
          />
          <GenreList
            domProps={{
              value: draft.genreId,
              required: true,
              onChange: genreId => updateResource({ ...draft, genreId }),
            }}
          />
          <TextAreaInput
            label="Synopsis"
            debounce={500}
            domProps={{
              value: draft.synopsis,
              onChange: synopsis => updateResource({ ...draft, synopsis }),
              placeholder: 'Synopsis du livre',
              required: true,
            }}
          />
          <PageList
            query={{ bookId: draft._id }}
            domProps={{
              value: draft.startingPageId,
              required: true,
              onChange: startingPageId => updateResource({ ...draft, startingPageId }),
            }}
          />
          <Button domProps={{ onClick: () => { startGame(draft) } }}>Essayer mon brouillon</Button>
        </div>
      </div>
    </div>
  )
}

export default DraftGeneral
