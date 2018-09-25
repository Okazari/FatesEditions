import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { WideButton, ButtonIcon, DataTable } from 'components/common'
import { dataRow } from 'styles/reactPoseAnimation'
import StatRow from './StatRow'
import styles from './styles.scss'

const AnimatedStatRow = posed.div(dataRow)

const headers = [
  { type: 'Icône', key: 'icon', className: styles.small },
  { type: 'Nom', key: 'name' },
  { type: 'Description', key: 'description', className: styles.large },
  { type: 'Valeur initiale', key: 'initial' },
  { type: 'Minimum', key: 'min' },
  { type: 'Maximum', key: 'max' },
  { type: 'Visible', classtype: '', key: 'visibility', className: styles.small },
  { type: <ButtonIcon domProps={{ disabled: true }} icon="delete" />, key: 'delete', className: styles.small },
]

const DraftStats = ({ book, updateStat, addStat, removeStat, disabled = false }) => {
  return !!book && (
    <div>
      <div className={styles.component}>
        <WideButton
          domProps={{ onClick: addStat, disabled }}
        >
          Ajouter une caractéristique
        </WideButton>
        <DataTable headers={headers} className="table-hover">
          <PoseGroup>
            {
              book.stats.map((stat, index) => (
                <AnimatedStatRow key={stat.id}>
                  <StatRow
                    key={stat.id}
                    index={index}
                    stat={stat}
                    disabled={disabled}
                    updateStat={updateStat}
                    removeStat={removeStat}
                  />
                </AnimatedStatRow>
              ))
            }
          </PoseGroup>
        </DataTable>
      </div>
    </div>
  )
}

export default DraftStats
