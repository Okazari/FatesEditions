import React from 'react'
import styles from './style.scss'
import Typist from 'react-typist'

const Game = ({ onClose }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rightSide}>
        <div className={styles.content}>
          <div className={styles.close} onClick={onClose}>
            x
          </div>
          <p className={styles.mainText}>
            {`Cela fait maintenant plusieurs heures que vous progressez dans cette forêt, cherchant la tanière du sorcier qui terrorise votre village et enlève femmes et enfants depuis des semaines. L'épais feuillage vous empêche de vous repérer convenablement, et même les rayons du soleil ont du mal à se frayer un chemin jusqu'à vous. Vous estimez qu'à ce rythme, le refuge censé être au centre du bois doit encore se trouver à une bonne heure de marche. Heureusement, vous n'avez pas fait de mauvaise rencontre, les rumeurs disant que de terribles créatures aiment à surprendre les étrangers en ce lieu ne sont peut-être pas fondées. Quelques minutes plus tard, vous apercevez sur votre droite ce qui semble être une petite clairière. Espérant pouvoir prendre une rapide pause, vous vous avancez, et sortez une gourde de votre sac, ainsi qu'un morceau de viande séchée. Tout en mangeant, vous regardez autour de vous. Soudain, il vous semble apercevoir une ombre, elle se déplace rapidement, mais vous devinez une carrure imposante. Peut-être une bête sauvage, ou bien votre compagnon Henrik, qui se serait finalement décidé à vous aider dans cette périlleuse quête... Dans le doute, vous cherchez votre épée du regard et posez votre main sur sa poignée. Mais lorsque vous relevez la tête, l'ombre n'est plus là... En revanche, vous entendez distinctement une branche craquer quelques mètres derrière vous.`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Game
