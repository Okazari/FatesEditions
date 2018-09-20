import React from 'react'
import { Button } from 'components/common'
import {
  RowWithDeleteButton,
  RollRow,
} from 'components/Views/Write/Page/common'
import styles from './style.scss'

const TransitionRoll = ({
  book,
  rolls,
  addRoll,
  removeRoll,
  updateRoll,
}) => {
  return (
    <div className={styles.component}>
      <span>Lancer de dé</span>
      { rolls.length > 0
        ? (rolls.map(roll => (
          <RowWithDeleteButton
            key={roll.id}
            removeRow={() => removeRoll(roll.id)}
          >
            <RollRow
              book={book}
              roll={roll}
              updateRoll={updateRoll}
            />
          </RowWithDeleteButton>
        ))) : (
          <div className={styles.centerButton}>
            <Button
              domProps={{ onClick: addRoll }}
            >
              Ajouter un Lancer de dé
            </Button>
          </div>
        )
      }
    </div>
  )
}

export default TransitionRoll
