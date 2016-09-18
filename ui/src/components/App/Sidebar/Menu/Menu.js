import React from 'react'
import styles from './style.scss'
import Title from './Title'
import MenuCollapsable, { MenuItem } from './MenuCollapsable'

const Menu = () => {
  return (
    <ul className="sidebar-menu">
      <Title>Plan du site</Title>
      <MenuCollapsable icon="gamepad" label="Jouer">
        <MenuItem label="Choisir un livre" />
        <MenuItem label="Reprendre une partie" />
      </MenuCollapsable>
      <MenuCollapsable icon="pencil" label="Ecrire">
        <MenuItem label="Créer un livre" />
        <MenuItem label="Voir mes brouillons" />
        <MenuItem label="Chez Zenika" icon="child"/>
        <MenuItem label="Rafraichissement des livres" icon="refresh"/>
      </MenuCollapsable>
      <MenuCollapsable icon="share-alt" label="Partager">
        <MenuItem label="Partager un livre"/>
        <MenuItem label="Voir mes livres partagés"/>
        <MenuItem label="Rafraichissement des livres" icon="refresh"/>
      </MenuCollapsable>
      <li className="treeview">
        <a ui-sref="app.profile" href="#/profile">
          <i className="fa fa-user"></i> <span>Mon profil</span>
        </a>
      </li>
    </ul>
  )
}

export default Menu