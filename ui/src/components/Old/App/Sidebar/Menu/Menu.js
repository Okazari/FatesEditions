import React from 'react'
import { Link } from 'react-router'
import { RouteService } from '../../../../../services'
import Title from './Title'
import MenuCollapsable, { MenuItem, BookMenuItem } from './MenuCollapsable'

const Menu = ({ postResource, drafts = [] }) => {
  const onCreateBook = () => {
    postResource({}).then((draft) => {
      const { _id } = draft
      RouteService.goTo(RouteService.routes.writebook(_id))
    })
  }
  return (
    <ul className="sidebar-menu">
      <Title>Plan du site</Title>
      <MenuCollapsable icon="gamepad" label="Jouer">
        <MenuItem label="Choisir un livre" link={RouteService.routes.playbook()} />
        <MenuItem label="Reprendre une partie" link={RouteService.routes.playgames()} />
      </MenuCollapsable>
      <MenuCollapsable icon="pencil" label="Ecrire">
        <MenuItem label="Créer un livre" onClick={onCreateBook} />
        <MenuItem label="Voir mes brouillons" link={RouteService.routes.writedrafts()} />
        {
          drafts.map((draft) => {
            return <BookMenuItem draftId={draft} key={draft} />
          })
        }
      </MenuCollapsable>
      <MenuCollapsable icon="share-alt" label="Partager">
        <MenuItem label="Partager un livre" link={RouteService.routes.sharebook()} />
        <MenuItem label="Voir mes livres partagés" link={RouteService.routes.sharepublications()} />
        <MenuItem label="Rafraichissement des livres" icon="refresh" />
      </MenuCollapsable>
      <li className="treeview">
        <Link to={RouteService.routes.profile()}>
          <i className="fa fa-user" /> <span>Mon profil</span>
        </Link>
      </li>
    </ul>
  )
}

export default Menu
