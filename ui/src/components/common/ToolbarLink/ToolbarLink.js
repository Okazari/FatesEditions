import React from 'react'
import { Link as RouterLink } from 'react-router'
import ToolbarButton from './ToolbarButton'

const ToolbarLink = ({ to, icon }) => {
  return (
    <RouterLink to={to}>
      <ToolbarButton icon={icon} />
    </RouterLink>
  )
}

export default ToolbarLink
