import React from 'react'
import { browserHistory } from 'react-router'
import { ToolbarButton } from 'components/common/ToolbarLink'

const ExitButton = () => (
  <div onClick={browserHistory.goBack}>
    <ToolbarButton
      icon="exit_to_app"
      dark
    />
  </div>
)

export default ExitButton
