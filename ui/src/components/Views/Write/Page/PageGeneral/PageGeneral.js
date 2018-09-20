import React from 'react'
import { Input, TextAreaInput } from 'components/common'
import styles from './styles.scss'
import EffectTable from './EffectTable'
import RollTable from './RollTable'

const PageGeneral = ({
  page,
  book,
  updatePage,
}) => {
  if (!page) return <div />
  return (
    <div className={styles.component}>
      <Input
        label="Titre"
        debounce={500}
        domProps={{
          type: 'text',
          value: page.title,
          onChange: title => updatePage({ title }),
          placeholder: 'Titre',
        }}
      />
      <TextAreaInput
        label="Memo"
        debounce={500}
        domProps={{
          type: 'text',
          value: page.description,
          onChange: description => updatePage({ description }),
          placeholder: 'Mémo',
        }}
      />
      <EffectTable
        book={book}
        pageId={page.id}
        effects={page.effects}
      />
      <RollTable
        book={book}
        pageId={page.id}
        rolls={page.rolls}
      />
    </div>
  )
}

export default PageGeneral
