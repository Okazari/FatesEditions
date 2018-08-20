import React from 'react'
import { AppLayout } from 'components/common'
import { RouteService } from 'services'

const tabPassword = { label: 'Changer de mot de passe', link: RouteService.routes.profilepassword() }
const tabDisconnect = { label: 'Déconnexion', link: RouteService.routes.profiledisconnect() }
const tabs = [tabPassword, tabDisconnect]

const Profile = props => <AppLayout {...props} tabs={tabs} />

export default Profile
