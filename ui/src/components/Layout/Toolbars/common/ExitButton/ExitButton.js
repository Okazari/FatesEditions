import React from 'react'
import { browserHistory } from 'react-router'
import { ToolbarButton } from 'components/common/ToolbarLink'

const ExitButton = ({ panelIsOpen, closePanel }) => {
  const onClick = panelIsOpen ? closePanel : browserHistory.goBack
  return (
    <div onClick={onClick}>
      <ToolbarButton
        icon="exit_to_app"
        dark
      />
    </div>
  )
}
export default ExitButton
