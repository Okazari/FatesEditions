import React from 'react'
import { Button, DataTable } from 'components/common'
import StatRow from './StatRow'
import styles from './styles.scss'

const headers = [
  { type: 'Nom', key: 'name' },
  { type: 'Description', key: 'description' },
  { type: 'Valeur initiale', key: 'initial' },
  { type: 'Minimum', key: 'min' },
  { type: 'Maximum', key: 'max' },
  { type: 'Visible', classtype: '', key: 'visibility' },
  { type: <Button domProps={{ disabled: true }} className="fa fa-close md-whiteframe-z1" />, key: 'delete' },
]

const DraftStats = ({ draft, updateResource, disabled = false }) => {
  const addStat = () => {
    draft.stats = draft.stats.concat({})
    updateResource(draft)
  }

  const removeStat = (index) => {
    draft.stats.splice(index, 1)
    updateResource(draft)
  }

  const updateDraft = (index, stat) => {
    draft.stats[index] = stat
    updateResource(draft)
  }

  return !!draft && (
    <div>
      <div className={styles.component}>
        <DataTable headers={headers} className="table-hover">
          {draft.stats.map((stat, index) => {
            return (
              <StatRow
                key={stat._id}
                index={index}
                stat={stat}
                disabled={disabled}
                updateResource={updateDraft}
                removeStat={removeStat}
              />
            )
          })}
        </DataTable>
        <Button domProps={{ onClick: addStat, disabled }}>
          Ajouter une caractéristique
        </Button>
      </div>
    </div>
  )
}

export default DraftStats
