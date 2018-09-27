import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { WideButton } from 'components/common'
import {
  RowWithDeleteButton,
  RollRow,
} from 'components/Views/Write/Page/common'
import { dataRow } from 'styles/reactPoseAnimation'
import styles from './style.scss'

const AnimatedRollRow = posed.div(dataRow)
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
      <PoseGroup>
        {
          rolls.map(roll => (
            <AnimatedRollRow key={roll.id}>
              <RowWithDeleteButton removeRow={() => removeRoll(roll.id)}>
                <RollRow
                  book={book}
                  roll={roll}
                  updateRoll={updateRoll}
                />
              </RowWithDeleteButton>
            </AnimatedRollRow>
          ))
        }
      </PoseGroup>
    </div>
  )
}

export default RollTable
