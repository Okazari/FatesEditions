import React from 'react'
import { SelectInput } from '../../../../common'
import PageOption from './PageOption'

const PageList = ({ pages = [], domProps }) => {
  return (
    <SelectInput
      label="Page de début"
      debounce={500}
      placeholder="-- Aucune page selectionnée --"
      domProps={domProps}
    >
      {pages.map(page =>
        <option value={page} key={page}>
          <PageOption pageId={page} key={page} />
        </option>)}
    </SelectInput>
  )
}

export default PageList
