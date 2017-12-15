import React from 'react'
import { Button, Input, GroupInput, Book, TextAreaInput } from '../../common'
import GenreList from './GenreList'
import PageList from './PageList'
import styles from './styles.scss'

// <DraftStat book={draft} updateResource={updateResource} />
// <DraftItem book={draft} updateResource={updateResource} />
// <DraftGraph book={draft} />
// <DraftPage query={{ bookId: draft._id }} />
const DraftGeneral = ({ draft, updateResource, disabled = false }) => {
  return !!draft && (
    <div>
      <div className={styles.component}>
        <div className={styles.bookCover}>
          <Book book={draft} />
          <GroupInput
            domProps={{
              type: 'text',
              value: draft.cover,
              onChange: cover => updateResource({ ...draft, cover }),
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
          <Button domProps={{ onClick: () => {} }}>Essayer mon brouillon</Button>
        </div>
      </div>
    </div>
  )
}

export default DraftGeneral
