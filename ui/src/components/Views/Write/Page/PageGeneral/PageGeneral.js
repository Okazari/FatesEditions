import React from 'react'
import { Input, TextAreaInput, Button } from 'components/common'
import styles from './styles.scss'
import { EffectRow, RollRow } from '../common'

const PageGeneral = ({
  page,
  book,
  updateEffect,
  addEffect,
  removeEffect,
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
      <div className={styles.effectTitle}>
        {"Effets à l'arrivée sur la page"}
      </div>
      <div className={styles.effectRow}>
        <Button className={styles.button} domProps={{ onClick: addEffect }} >
          {'Ajouter un Effet'}
        </Button>
        {
          page.effects && page.effects.map((effect, index) => {
            return (<EffectRow
              key={effect.id}
              effect={effect}
              index={index}
              book={book}
              updateEffect={updateEffect}
              removeEffect={effectId => removeEffect(effectId)}
            />)
          })
        }
      </div>
      <RollRow
        book={book}
        roll={page.roll}
        update={updatePage}
      />
    </div>
  )
}

export default PageGeneral
