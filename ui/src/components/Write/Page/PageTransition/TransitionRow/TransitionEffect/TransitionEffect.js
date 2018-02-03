import React from 'react'
import { Button } from 'components/common'
import EffectRow from '../../../common/EffectRow'
import styles from './styles.scss'

const TransitionEffect = ({
  book,
  transition,
  index,
  addEffect,
  removeEffect,
  updateResource,
}) => {
  const updateEffect = (effectIndex, effect) => {
    transition.effects[effectIndex] = effect
    updateResource(index, transition)
  }

  return (
    <div className={styles.component}>
      <span>Effets</span>
      {transition.effects.map((effect, effectIndex) =>
        <EffectRow
          key={effect.id}
          effect={effect}
          index={effectIndex}
          book={book}
          updateResource={updateEffect}
          removeEffect={removeEffect}
        />)}
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

export default TransitionEffect
