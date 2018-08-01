import React from 'react'
import { Input, TextAreaInput, Button } from 'components/common'
import styles from './styles.scss'
import EffectRow from '../common/EffectRow'

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
      {/* <Input
        label="Lien SoundCloud"
        debounce={500}
        domProps={{
          placeholder: 'Lien SoundCloud de votre musique de fond',
          value: page.backgroundMusic,
          onChange: backgroundMusic => updatePage({ backgroundMusic }),
        }}
      /> */}
      <div className={styles.effectTitle}>
        {"Effets à l'arrivée sur la page"}
      </div>
      <div className={styles.effectRow}>
        <Button className="md-whiteframe-z1" domProps={{ onClick: addEffect }} >
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
    </div>
  )
}

export default PageGeneral
