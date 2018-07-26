import React from 'react'
import { Link as RouterLink } from 'react-router'
import ToolbarButton from './ToolbarButton'
import styles from './style.scss'

const ToolbarLink = ({ to, icon, location }) => {
  let className = null
  if (!!location && location.startsWith(to)) {
    className = styles.selected
  }
  console.log('location:', location)
  console.log('to:', to)
  return (
    <RouterLink to={to}>
      <ToolbarButton icon={icon} domProps={{ className }} />
    </RouterLink>
  )
}

export default ToolbarLink
