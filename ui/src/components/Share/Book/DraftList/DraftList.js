// eslint-disable-next-line
import React from 'react'
import { SelectInput } from '../../../common'
import DraftOption from './DraftOption'
import DraftInformation from './DraftInformation'
import DraftPublication from './DraftPublication'

class DraftList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      draftId: ''
    }
  }

  showBookInformation(draftId) {
    this.setState({ draftId })
  }

  render() {
    const { drafts = [] } = this.props
    const { draftId } = this.state
    return (
      <div>
        <SelectInput
          domProps={{
            value: '',
            onChange: draftId => this.showBookInformation(draftId),
          }}
          label={'Brouillon que vous souhaitez publier'}
          placeholder={'-- Choisissez un brouillon à publier --'}
        >
          {drafts.map(draft => <DraftOption draftId={draft} key={draft} />)}
        </SelectInput>
        {draftId !== '' ?
          <div>
            <DraftInformation draftId={draftId} key={draftId} />
            <DraftPublication draftId={draftId} key={draftId} />
          </div>
          : null}
      </div>
    )
  }
}

export default DraftList
