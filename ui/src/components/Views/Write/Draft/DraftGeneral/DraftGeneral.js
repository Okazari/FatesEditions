import React from 'react'
import { Button,
  Input,
  Book,
  BookWrapper,
  TextAreaInput,
  AlertMessage,
  Emphasis,
} from 'components/common'
import { RouteService } from 'services'
import GenreList from './GenreList'
import PageList from './PageList'
import styles from './styles.scss'

const tryGame = book => RouteService.goTo(RouteService.routes.trialgame(book.id))

const DraftGeneral = ({
  book,
  genres,
  updateBook,
  deleteBook,
  publishBook,
  loading,
  error,
  disabled = false,
}) => {
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
        <Button domProps={{ onClick: () => tryGame(book) }}>Essayer mon brouillon</Button>
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
        {
          error
          ? (
            <AlertMessage title={'Format de livre incorrect !'}>
              Votre livre ne peux pas être publié en {"l'état"}.
              Actuellement la seule raison est {"d'avoir"} oublié de
              <Emphasis>définir une page de début à votre livre.</Emphasis>
              Si ce {"n'est"} pas le cas merci de contacter {"l'administrateur"} à {"l'adresse"} fateseditions@gmail.com.
            </AlertMessage>
          )
          : (
            <AlertMessage title={'Information importante'}>
              <Emphasis>Publier</Emphasis>
              votre brouillon déplacera celui-ci dans la section
              <Emphasis>Mes livres publiés.</Emphasis>
              Les autres membres pourrons alors trouver votre
              histoire dans la liste des
              <Emphasis>livres jouables.</Emphasis>
              Il ne sera dès lors
              <Emphasis>plus éditable</Emphasis>
              à moins de le repasser en brouillon.
            </AlertMessage>
          )
        }
        <Button
          domProps={{ onClick: () => publishBook(book.id) }}
          className={styles.publish}
        >
          {
            loading
            ? 'Chargement'
            : 'Publier mon brouillon'
          }
        </Button>
        <AlertMessage title={'Attention !'}>
          <Emphasis>Supprimer</Emphasis>
          votre brouillon supprimera celui-ci
          <Emphasis>définitivement</Emphasis>
          et de manière<Emphasis>irréversible.</Emphasis>
        </AlertMessage>
        <Button
          domProps={{ onClick: () => deleteBook(book.id) }}
          className={styles.delete}
        >
          Supprimer mon brouillon
        </Button>
      </div>
    </div>
  )
}

export default DraftGeneral
