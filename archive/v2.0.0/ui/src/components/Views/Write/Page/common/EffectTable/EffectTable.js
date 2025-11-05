import React from 'react'
import { WideButton, AnimatedList } from 'components/common'
import {
  RowWithDeleteButton,
  EffectRow,
} from 'components/Views/Write/Page/common'
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
      <div className={styles.centerButton}>
        <WideButton
          domProps={{ onClick: addEffect }}
        >
          {'Ajouter un effet'}
        </WideButton>
      </div>
      <AnimatedList list={effects}>
        {
          (effect, effectIndex) => (
            <RowWithDeleteButton removeRow={() => removeEffect(effect.id)}>
              <EffectRow
                effect={effect}
                index={effectIndex}
                book={book}
                pageId={pageId}
                updateEffect={updateEffect}
              />
            </RowWithDeleteButton>
          )
        }
      </AnimatedList>
    </div>
  )
}

export default EffectTable
