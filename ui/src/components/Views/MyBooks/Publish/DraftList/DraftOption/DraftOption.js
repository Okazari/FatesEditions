import React from 'react'

const DraftOption = ({ draft = {} }) => {
  return <option value={draft.id}>{draft.name || 'Livre sans titre'}</option>
}
export default DraftOption
