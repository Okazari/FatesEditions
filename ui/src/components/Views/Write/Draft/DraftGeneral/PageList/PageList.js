import React from 'react'
import { SelectInput } from 'components/common'

const PageList = ({ pages = [], domProps }) => {
  return (
    <SelectInput
      label="Page de début"
      debounce={500}
      placeholder="-- Aucune page selectionnée --"
      domProps={domProps}
    >
      {
        pages.map(page =>
          <option value={page.id} key={page.id}>
            {page.title}
          </option>,
        )
      }
    </SelectInput>
  )
}

export default PageList
