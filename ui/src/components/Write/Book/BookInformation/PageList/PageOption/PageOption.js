import React from 'react'
import { SelectOption } from '../../../../../common'

const PageOption = ({ page = {}, defaultValue }) => {
  return <SelectOption value={page._id} label={page.title} defaultValue={defaultValue} />
}

export default PageOption
