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

const RollTable = ({
  book,
  rolls,
  addRoll,
  removeRoll,
  updateRoll,
}) => {
  return (
    <div className={styles.component}>
      <span>Lancer de dé</span>
      <PoseGroup>
        { rolls.length > 0
          ? (rolls.map(roll => (
            <AnimatedRollRow key={roll.id}>
              <RowWithDeleteButton removeRow={() => removeRoll(roll.id)}>
                <RollRow
                  book={book}
                  roll={roll}
                  updateRoll={updateRoll}
                />
              </RowWithDeleteButton>
            </AnimatedRollRow>
          ))) : (
            <AnimatedRollRow key="addRollButton">
              <div className={styles.centerButton}>
                <WideButton
                  domProps={{ onClick: addRoll }}
                >
                  Ajouter un Lancer de dé
                </WideButton>
              </div>
            </AnimatedRollRow>
          )
        }
      </PoseGroup>
    </div>
  )
}

export default RollTable
