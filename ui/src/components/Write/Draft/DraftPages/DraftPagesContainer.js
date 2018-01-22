import React from 'react'
import DraftPages from './DraftPages'
import connect from '../common/CRUDConnector'

const core = `
  id
  pages {
    id
    title
    description
  }
`
const DraftPagesContainer = (props) => {
  const { book, addPage, removePage } = props
  const _addPage = () => addPage({ variables: { bookId: book.id } })
  const _removePage = page => removePage({ variables: { bookId: book.id, pageId: page.id } })
  return <DraftPages {...props} removePage={_removePage} addPage={_addPage} />
}
export default connect('Page', core)(DraftPagesContainer)
