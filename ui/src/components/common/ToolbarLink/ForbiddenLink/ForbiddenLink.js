import React from 'react'
import { Link as RouterLink } from 'react-router'
import { RouteService } from 'services'
import ToolbarButton from '../ToolbarButton'
import styles from './style.scss'

const ForbiddenLink = ({ icon }) => (
  <RouterLink
    to={{
      pathname: RouteService.routes.connection(),
      state: { isRedirected: true },
    }}
  >
    <ToolbarButton
      icon={icon}
      iconDomProps={{ className: styles.forbidden }}
    />
  </RouterLink>
)

export default ForbiddenLink
