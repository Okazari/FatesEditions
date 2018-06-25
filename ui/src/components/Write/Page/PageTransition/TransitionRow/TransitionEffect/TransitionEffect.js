import React from 'react'
import { Button } from 'components/common'
import EffectRow from './EffectRow'
import styles from './styles.scss'

const TransitionEffect = ({
  book,
  transition,
  addEffect,
  removeEffect,
  pageId,
}) => {
  return (
    <div className={styles.component}>
      <span>Effets</span>
      {transition.effects.map((effect, effectIndex) =>
        <EffectRow
          key={effect.id}
          effect={effect}
          index={effectIndex}
          book={book}
          pageId={pageId}
          transitionId={transition.id}
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
