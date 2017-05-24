import React from 'react'
import { Link, browserHistory } from 'react-router'
import Title from './Title'
import MenuCollapsable, { MenuItem, BookMenuItem } from './MenuCollapsable'

const Menu = ({ postResource, drafts = [] }) => {
  const onCreateBook = () => {
    postResource({}).then((draft) => {
      const { _id } = draft
      browserHistory.push(`/app/write/book/${_id}`)
    })
  }
  return (
    <ul className="sidebar-menu">
      <Title>Plan du site</Title>
      <MenuCollapsable icon="gamepad" label="Jouer">
        <MenuItem label="Choisir un livre" link="/app/play/books" />
        <MenuItem label="Reprendre une partie" link="/app/play/games" />
      </MenuCollapsable>
      <MenuCollapsable icon="pencil" label="Ecrire">
        <MenuItem label="Créer un livre" onClick={onCreateBook} />
        <MenuItem label="Voir mes brouillons" link="/app/write/drafts" />
        {
          drafts.map((draft) => {
            return <BookMenuItem draftId={draft} key={draft} />
          })
        }
      </MenuCollapsable>
      <MenuCollapsable icon="share-alt" label="Partager">
        <MenuItem label="Partager un livre" link="/app/share/book" />
        <MenuItem label="Voir mes livres partagés" link="/app/share/publications" />
        <MenuItem label="Rafraichissement des livres" icon="refresh" />
      </MenuCollapsable>
      <li className="treeview">
        <Link to="/app/profile">
          <i className="fa fa-user" /> <span>Mon profil</span>
        </Link>
      </li>
    </ul>
  )
}

export default Menu
