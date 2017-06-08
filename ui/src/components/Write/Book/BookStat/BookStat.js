import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../../common/Box'
import { Button, DataTable } from '../../../common'
import styles from './styles.scss'
import StatRow from './StatRow'

const headers = [
  { type: 'Nom', key: 'name' },
  { type: 'Description', key: 'description' },
  { type: 'Valeur initiale', key: 'initial' },
  { type: 'Minimum', key: 'min' },
  { type: 'Maximum', key: 'max' },
  { type: 'Visible', classtype: '', key: 'visibility' },
  { type: <Button domProps={{ disabled: true }} className="fa fa-close md-whiteframe-z1" />, key: 'delete' },
]
const BookStat = ({ draft, updateResource }) => {
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

  return (
    <div className={styles.component}>
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Caractéristiques</h3>
          <div className="box-tools pull-right">
            <div className="btn-group" />
          </div>
        </BoxHeader>
        <BoxBody className="no-padding">
          <DataTable headers={headers} className="table-hover">
            {draft.stats.map((stat, index) => {
              return (
                <StatRow
                  index={index}
                  stat={stat}
                  updateResource={updateDraft}
                  removeStat={removeStat}
                />
              )
            })}
          </DataTable>
        </BoxBody>
        <BoxFooter className={styles.centerFooter}>
          <Button domProps={{ onClick: addStat }}>
            Ajouter une caractéristique
          </Button>
        </BoxFooter>
      </Box>
    </div>
  )
}

export default BookStat
