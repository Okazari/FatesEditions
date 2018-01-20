import React from 'react'
import { Input, TextAreaInput, Button } from 'components/common'
import styles from './styles.scss'
import EffectRow from '../common/EffectRow'

const PageGeneral = ({ page, params: { draftId }, updatePage }) => {
  if (!page) return <div />
  const bookId = draftId

  const doUpdatePage = updatedPage => updatePage({
    variables: {
      page: { id: page.id, ...updatedPage },
      bookId: draftId,
    },
  })

  const addEffect = () => {
    doUpdatePage({ effects: page.effects.concat({}) })
  }

  const removeEffect = (index) => {
    page.effects.splice(index, 1)
    doUpdatePage({ effects: page.effects })
  }

  const updateEffects = (index, effect) => {
    page.effects[index] = effect
    doUpdatePage({ effects: page.effects })
  }

  return (
    <div className={styles.component}>
      <Input
        label="Titre"
        debounce={500}
        domProps={{
          type: 'text',
          value: page.title,
          onChange: title => doUpdatePage({ title }),
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
          onChange: description => doUpdatePage({ description }),
          placeholder: 'Mémo',
          required: true,
        }}
      />
      <Input
        label="Lien SoundCloud"
        debounce={500}
        domProps={{
          placeholder: 'Lien SoundCloud de votre musique de fond',
          value: page.backgroundMusic,
          onChange: backgroundMusic => doUpdatePage({ backgroundMusic }),
        }}
      />
      <div className={styles.effectTitle}>
        {"Effets à l'arrivée sur la page"}
      </div>
      <div className={styles.effectRow}>
        {
          page.effects && page.effects.map((effect, index) => {
            const key = index
            return (<EffectRow
              key={key}
              effect={effect}
              index={index}
              bookId={bookId}
              updateResource={updateEffects}
              removeEffect={indexEffect => removeEffect(indexEffect)}
            />)
          })
        }
      </div>
      <Button className="md-whiteframe-z1" domProps={{ onClick: addEffect }} >
        {'Ajouter un Effet'}
      </Button>
    </div>
  )
}

export default PageGeneral
