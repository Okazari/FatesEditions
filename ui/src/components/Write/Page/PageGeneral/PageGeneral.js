import React from 'react'
import { Input, TextAreaInput, Button } from 'components/common'
import styles from './styles.scss'
import EffectRow from '../common/EffectRow'

const PageGeneral = ({
  page,
  book,
  params: { draftId, pageId },
  updateEffect,
  addEffect,
  removeEffect,
  updatePage,
}) => {
  if (!page) return <div />
  const bookId = draftId

  const doUpdatePage = updatedPage => updatePage({
    variables: {
      page: { id: page.id, ...updatedPage },
      bookId,
    },
  })

  const doAddEffect = () => addEffect({
    variables: {
      bookId,
      pageId,
    },
  })

  const doRemoveEffect = effectId => removeEffect({
    variables: {
      bookId,
      pageId,
      effectId,
    },
  })

  const doUpdateEffect = effect => updateEffect({
    variables: {
      bookId,
      pageId,
      effect,
    },
  })

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
              book={book}
              updateEffect={doUpdateEffect}
              removeEffect={effectId => doRemoveEffect(effectId)}
            />)
          })
        }
      </div>
      <Button className="md-whiteframe-z1" domProps={{ onClick: doAddEffect }} >
        {'Ajouter un Effet'}
      </Button>
    </div>
  )
}

export default PageGeneral
