import React from 'react'
import { WideButton, ButtonIcon, DataTable, AnimatedList } from 'components/common'
import StatRow from './StatRow'
import styles from './styles.scss'

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
          <AnimatedList list={book.stats}>
            {
              (stat, index) => <StatRow
                index={index}
                stat={stat}
                disabled={disabled}
                updateStat={updateStat}
                removeStat={removeStat}
              />
            }
          </AnimatedList>
        </DataTable>
      </div>
    </div>
  )
}

export default DraftStats
