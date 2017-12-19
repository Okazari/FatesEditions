import React from 'react'
import { Input, TextAreaInput, Button } from 'components/common'
import styles from './styles.scss'
import EffectRow from '../common/EffectRow'

const PageGeneral = ({ page, bookId, updateResource }) => {
  if (!page) return <div />

  const addEffect = () => {
    page.effects = page.effects.concat({})
    updateResource(page)
  }

  const removeEffect = (index) => {
    page.effects.splice(index, 1)
    updateResource(page)
  }

  const updatePage = (index, effect) => {
    page.effects[index] = effect
    updateResource(page)
  }

  return (
    <div className={styles.component}>
      <Input
        label="Titre"
        debounce={500}
        domProps={{
          type: 'text',
          value: page.title,
          onChange: title => updateResource({ ...page, title }),
          placeholder: 'Titre',
          required: true,
        }}
      />
      <TextAreaInput
        label="Memo"
        debounce={500}
        domProps={{
          type: 'text',
          value: page.description,
          onChange: description => updateResource({ ...page, description }),
          placeholder: 'Mémo',
          required: true,
        }}
      />
      <Input
        label="Lien SoundCloud"
        domProps={{
          placeholder: 'Lien SoundCloud de votre musique de fond',
          value: page.backgroundMusic,
          onChange: backgroundMusic => updateResource({ ...page, backgroundMusic }),
        }}
      />
      <div className={styles.effectTitle}>
        {"Effets à l'arrivée sur la page"}
      </div>
      <div className={styles.effectRow}>
        {
          page.effects.map((effect, index) =>
            <EffectRow
              key={effect._id}
              effect={effect}
              index={index}
              bookId={bookId}
              updateResource={updatePage}
              removeEffect={indexEffect => removeEffect(indexEffect)}
            />,
          )
        }
      </div>
      <Button className="md-whiteframe-z1" domProps={{ onClick: () => addEffect() }} >
        {'Ajouter un Effet'}
      </Button>
    </div>
  )
}

export default PageGeneral
