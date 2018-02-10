import React from 'react'
import classnames from 'classnames'
import { ButtonIcon, Icon, Book } from 'components/common'
import { RouteService } from 'services'
import styles from './style.scss'

const editDraft = (draftId) => {
  RouteService.goTo(RouteService.routes.writebook(draftId))
}

const Drafts = ({ author = {}, createBook, deleteBook }) => {
  const books = author.drafts
  const nbColumns = document && Math.floor((document.body.clientWidth - 100) / 240)
  // TODO Replace with loader
  if (!books) return null
  return (
    <div className={styles.list}>
      <div onClick={createBook} className={classnames(styles.book, styles.newBook)}>
        <Icon icon="library_add" />
      </div>
      {
        books.map((book, index) => {
          const usedIndex = index + 1
          const delay = 100 * ((usedIndex % nbColumns) + Math.floor(usedIndex / nbColumns))
          return (
            <div
              key={book.id}
              className={styles.book}
            >
              <div className={styles.delete}>
                <ButtonIcon
                  icon="delete_forever"
                  className={styles.action}
                  domProps={{
                    onClick: () => deleteBook(book.id),
                  }}
                />
              </div>
              <Book showDelay={delay} book={book} onClick={() => editDraft(book.id)} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Drafts
