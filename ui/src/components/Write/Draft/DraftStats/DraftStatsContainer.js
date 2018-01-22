import React from 'react'
import DraftStats from './DraftStats'
import connect from '../common/CRUDConnector'

const core = `
  id
  stats {
    id
    name
    description
    visible
    initValue
    min
    max
  }
`

const DraftStatsContainer = (props) => {
  const { book, addStat, removeStat, updateStat } = props
  const _addStat = () => addStat({ variables: { bookId: book.id } })
  const _removeStat = stat => removeStat({ variables: { bookId: book.id, statId: stat.id } })
  const _updateStat = stat => updateStat({ variables: { bookId: book.id, stat } })
  return (
    <DraftStats
      {...props}
      removeStat={_removeStat}
      updateStat={_updateStat}
      addStat={_addStat}
    />
  )
}

export default connect('Stat', core)(DraftStatsContainer)
