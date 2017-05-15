import React from 'react'
import {SelectInput} from 'components/common'
import PageOption from './PageOption'

const PageList = ( { pages=[], resource, resourceHandler, defaultValue } ) => {
  console.log(defaultValue);
  return (
    <SelectInput label="Page de début" placeholder="-- Aucune page selectionnée --"
                 domProps={{name: 'startingPageId'}}
                 resource={resource}
                 resourceHandler={resourceHandler} >
      {pages.map(page => <PageOption pageId={page} key={page} defaultValue={defaultValue} />)}
    </SelectInput>
  )
}

export default PageList
