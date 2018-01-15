import React from 'react'
import { Button, ButtonIcon, DataTable } from 'components/common'
import StatRow from './StatRow'
import styles from './styles.scss'

const headers = [
  { type: 'Nom', key: 'name' },
  { type: 'Description', key: 'description', className: styles.large },
  { type: 'Valeur initiale', key: 'initial' },
  { type: 'Minimum', key: 'min' },
  { type: 'Maximum', key: 'max' },
  { type: 'Visible', classtype: '', key: 'visibility', className: styles.small },
  { type: <ButtonIcon domProps={{ disabled: true }} icon="delete" />, key: 'delete', className: styles.small },
]

const DraftStats = ({ book, updateStat, addStat, removeStat, disabled = false }) => {
  const doAddStat = () => addStat({ variables: { bookId: book.id } })
  const doRemoveStat = stat => removeStat({ variables: { bookId: book.id, statId: stat.id } })
  const doUpdateStat = stat => updateStat({ variables: { bookId: book.id, stat } })

  return !!book && (
    <div>
      <div className={styles.component}>
        <DataTable headers={headers} className="table-hover">
          {
            book.stats.map((stat, index) => (
              <StatRow
                key={stat.id}
                index={index}
                stat={stat}
                disabled={disabled}
                updateStat={doUpdateStat}
                removeStat={doRemoveStat}
              />
            ))
          }
        </DataTable>
        <Button domProps={{ onClick: doAddStat, disabled }}>
          Ajouter une caractéristique
        </Button>
      </div>
    </div>
  )
}

export default DraftStats
