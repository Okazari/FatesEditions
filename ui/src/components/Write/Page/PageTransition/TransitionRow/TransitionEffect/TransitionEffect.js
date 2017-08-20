import React from 'react'
import { Button } from '../../../../../common'
import EffectRow from '../../../common/EffectRow'
import styles from './styles.scss'

const TransitionEffect = ({ book, transition, index, updateResource }) => {
  const addEffect = () => {
    transition.effects = transition.effects.concat({})
    updateResource(index, transition)
  }

  const updateEffect = (effectIndex, effect) => {
    transition.effects[effectIndex] = effect
    updateResource(index, transition)
  }

  const removeEffect = (effectIndex) => {
    transition.effects.splice(effectIndex, 1)
    updateResource(index, transition)
  }

  return (
    <div className={styles.component}>
      <span>Effets</span>
      {transition.effects.map((effect, effectIndex) =>
        <EffectRow
          key={effect._id}
          effect={effect}
          index={effectIndex}
          bookId={book._id}
          updateResource={updateEffect}
          removeEffect={removeEffect}
        />)}
      <div className={styles.centerButton}>
        <Button
          className="btn-xs md-whiteframe-z1"
          domProps={{ onClick: addEffect }}
        >
          {'Ajouter un effet'}
        </Button>
      </div>
    </div>
  )
}

export default TransitionEffect
