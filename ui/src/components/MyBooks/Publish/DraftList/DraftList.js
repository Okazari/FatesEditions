// eslint-disable-next-line
import React from 'react'
import { SelectInput } from 'components/common'
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
      {drafts.map(draft => <DraftOption draft={draft} key={draft.id} />)}
    </SelectInput>
  )
}

export default DraftList
