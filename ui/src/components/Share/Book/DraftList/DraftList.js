// eslint-disable-next-line
import React from 'react'
import { SelectInput } from '../../../common'
import DraftOption from './DraftOption'

const DraftList = ({ drafts = [], updateDraft }) => {
  return (
    <SelectInput
      domProps={{
        value: '',
        onChange: draftId => updateDraft(draftId),
      }}
      label={'Brouillon que vous souhaitez publier'}
      placeholder={'-- Choisissez un brouillon à publier --'}
    >
      {drafts.map(draft => <DraftOption draftId={draft} key={draft} />)}
    </SelectInput>
  )
}

export default DraftList
