import React from 'react'
import {
  Button,
  Input,
  Book,
  BookWrapper,
  TextAreaInput,
} from 'components/common'
import { RouteService } from 'services'
import GenreList from './GenreList'
import PageList from './PageList'
import DeleteButton from './DeleteButton'
import PublishButton from './PublishButton'
import styles from './styles.scss'

const tryGame = book => RouteService.goTo(RouteService.routes.trialgame(book.id))

const DraftGeneral = ({
  book,
  genres,
  updateBook,
  disabled = false,
}) => {
  const startingPage = book.pages.find(page => page.id === book.startingPageId)
  return !!book && (
    <div className={styles.component}>
      <div className={styles.actionPanel}>
        <div className={styles.bookCover}>
          <BookWrapper>
            <Book book={book} />
          </BookWrapper>
        </div>
        <PageList
          pages={book.pages}
          domProps={{
            value: book.startingPageId,
            onChange: startingPageId => updateBook({ startingPageId }),
          }}
        />
        {
          startingPage
          ? <Button domProps={{ onClick: () => tryGame(book) }}>
              Essayer mon brouillon
            </Button>
          : <Button className={styles.disabled}>
              Essayer mon brouillon
            </Button>
        }
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
          }}
        />
        <GenreList
          genres={genres}
          domProps={{
            value: book.genreId,
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
          }}
        />
        <PublishButton bookId={book.id} />
        <DeleteButton bookId={book.id} />
      </div>
    </div>
  )
}

export default DraftGeneral
