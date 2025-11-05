import React from 'react'
import format from 'date-fns/format'
import frLocale from 'date-fns/locale/fr'
import { Loader, Button, ButtonIcon, BookWrapper, LastGameButton } from 'components/common'
import { AuthService } from 'services'
import styles from './style.scss'

const Showdown = ({ book, onClick, BookComponent, unpublishBook, unpublishable }) => {
  if (!book) return <Loader />
  const isAuthor = AuthService.getUser() && AuthService.getUser()._id === book.author.id
  const date = format(
    new Date(book.lastModificationDate),
    'DD-MM-YY',
    {
      locale: frLocale,
      includeSeconds: true,
    },
  )
  return (
    <div className={styles.component}>
      <div className={styles.grid}>
        <div className={styles.center}>
          <BookWrapper>
            <BookComponent content={book} />
          </BookWrapper>
        </div>
        {
          <div className={styles.content}>
            <div className={styles.detailsWrapper}>
              <div className={styles.title}>{book.name}</div>
              <div className={styles.subtitleWrapper}>
                <div className={styles.author}>de {book.author.username}</div>
                <div className={styles.date}>M.A.J. {date}</div>
              </div>
              {
                unpublishable && isAuthor &&
                <ButtonIcon
                  domProps={{
                    onClick: () => unpublishBook(book.id),
                  }}
                  className={styles.unpublish}
                  icon="close"
                  subLabel="Dépublier"
                />
              }
              <div className={styles.synopsis}>
                {book.synopsis}
              </div>
            </div>
            <div className={styles.buttons}>
              <Button domProps={{ onClick }}>Nouvelle Partie</Button>
              <LastGameButton book={book} />
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Showdown
