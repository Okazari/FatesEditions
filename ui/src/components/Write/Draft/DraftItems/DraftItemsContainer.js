import React from 'react'
import DraftItems from './DraftItems'
import connect from '../common/CRUDConnector'

const core = `
  id
  objects {
    id
    name
    description
    atStart
    visible
  }
`
const DraftItemsContainer = (props) => {
  const { book, addObject, removeObject, updateObject } = props
  const _addObject = () => addObject({ variables: { bookId: book.id } })
  const _removeObject = object => removeObject({
    variables: { bookId: book.id, objectId: object.id },
  })
  const _updateObject = object => updateObject({ variables: { bookId: book.id, object } })
  return (
    <DraftItems
      {...props}
      updateObject={_updateObject}
      removeObject={_removeObject}
      addObject={_addObject}
    />
  )
}


export default connect('Object', core)(DraftItemsContainer)
