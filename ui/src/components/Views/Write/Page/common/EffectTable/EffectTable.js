import React from 'react'
import { Button } from 'components/common'
import { RowWithDeleteButton, EffectRow } from 'components/Views/Write/Page/common'
import styles from './styles.scss'

const EffectTable = ({
  book,
  effects,
  addEffect,
  updateEffect,
  removeEffect,
  pageId,
}) => {
  return (
    <div className={styles.component}>
      <span>Effets</span>
      {
        effects.map((effect, effectIndex) => (
          <RowWithDeleteButton
            key={effect.id}
            removeRow={() => removeEffect(effect.id)}
          >
            <EffectRow
              effect={effect}
              index={effectIndex}
              book={book}
              pageId={pageId}
              updateEffect={updateEffect}
            />
          </RowWithDeleteButton>
        ))
      }
      <div className={styles.centerButton}>
        <Button
          domProps={{ onClick: addEffect }}
        >
          {'Ajouter un effet'}
        </Button>
      </div>
    </div>
  )
}

export default EffectTable
