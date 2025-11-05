import React from 'react'
import posed from 'react-pose'
import { WideButton, AnimatedList } from 'components/common'
import {
  RowWithDeleteButton,
  RollRow,
} from 'components/Views/Write/Page/common'
import styles from './style.scss'

const AnimatedAddRollButton = posed.div({
  hiddenButton: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 100,
        delay: 100,
      },
      opacity: {
        duration: 100,
        delay: 0,
      },
    },
  },
  visibleButton: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: {
        duration: 100,
        delay: 0,
      },
      opacity: {
        duration: 200,
        delay: 100,
      },
    },
  },
})

const RollTable = ({
  book,
  rolls,
  addRoll,
  removeRoll,
  updateRoll,
}) => {
  return (
    <div className={styles.component}>
      <AnimatedAddRollButton
        className={styles.animatedAddRollButton}
        pose={rolls.length < 1 ? 'visibleButton' : 'hiddenButton'}
      >
        <div className={styles.centerButton}>
          <WideButton
            domProps={{ onClick: addRoll }}
          >
            Ajouter un Lancer de dé
          </WideButton>
        </div>
      </AnimatedAddRollButton>
      { rolls.length > 0 &&
        <span key="label">Lancer de dé</span>
      }
      <AnimatedList list={rolls}>
        {
          roll => (
            <RowWithDeleteButton removeRow={() => removeRoll(roll.id)}>
              <RollRow
                book={book}
                roll={roll}
                updateRoll={updateRoll}
              />
            </RowWithDeleteButton>
          )
        }
      </AnimatedList>
    </div>
  )
}

export default RollTable
