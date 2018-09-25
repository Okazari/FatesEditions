import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { WideButton } from 'components/common'
import {
  RowWithDeleteButton,
  EffectRow,
} from 'components/Views/Write/Page/common'
import { dataRow } from 'styles/reactPoseAnimation'
import styles from './styles.scss'

const AnimatedEffectRow = posed.div(dataRow)

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
      <PoseGroup>
        {
          effects.map((effect, effectIndex) => (
            <AnimatedEffectRow key={effect.id}>
              <RowWithDeleteButton removeRow={() => removeEffect(effect.id)}>
                <EffectRow
                  effect={effect}
                  index={effectIndex}
                  book={book}
                  pageId={pageId}
                  updateEffect={updateEffect}
                />
              </RowWithDeleteButton>
            </AnimatedEffectRow>
          ))
        }
      </PoseGroup>
      <div className={styles.centerButton}>
        <WideButton
          domProps={{ onClick: addEffect }}
        >
          {'Ajouter un effet'}
        </WideButton>
      </div>
    </div>
  )
}

export default EffectTable
