import React from 'react'
import { SelectOption } from 'components/common'

const PageOption = ({ page={}, defaultValue }) => <SelectOption value={page._id} label={page.title} defaultValue={defaultValue}/>

export default PageOption
