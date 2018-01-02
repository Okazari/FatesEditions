import React from 'react'

const DraftOption = ({ draft = {} }) => {
  return <option value={draft._id}>{draft.name}</option>
}
export default DraftOption
