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
const BookStat = ({ book, updateResource, disabled }) => {
  const addStat = () => {
    book.stats = book.stats.concat({})
    updateResource(book)
  }

  const removeStat = (index) => {
    book.stats.splice(index, 1)
    updateResource(book)
  }

  const updateDraft = (index, stat) => {
    book.stats[index] = stat
    updateResource(book)
  }

  return !!book && (
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
            {book.stats.map((stat, index) => {
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
        </BoxBody>
        <BoxFooter className={styles.centerFooter}>
          <Button domProps={{ onClick: addStat, disabled }}>
            Ajouter une caractéristique
          </Button>
        </BoxFooter>
      </Box>
    </div>
  )
}

export default BookStat
