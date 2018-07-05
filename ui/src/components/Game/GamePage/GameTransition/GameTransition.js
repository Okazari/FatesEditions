import React from 'react'
import classnames from 'classnames'
import GameService from 'services/GameService'
import Button from 'components/common/Button'
import styles from './styles.scss'

//  input: {
//  visible: boolean,
//  errors: [String]
//  transitionId,
//  text: String,
//  }

// Move checkTransitionVisibility to HOC

const GameTransition = ({
  visible,
  errors,
  transitionId,
  text,
}) => {
  
  if (!visible) return null 
  return (
    <Button 
      domProps={{
        onClick: () => !!transition.toPage && GameService.changePageAndApplyEffects(transitionId),
      }}
      className={styles.component}
    >
      {text}
      {errors.map(error => console.log(error) || <div className={styles.error}>{error.message}</div>)}
    </Button>
  )
}

// OLDSCHOOL

// const GameTransition = ({
//   transition,
//   effects,
// }) => {
//   const { isVisible, incompleteCondition } = GameService.checkTransitionVisibility(transition)
//   if (!isVisible) return null

//   const onClick = () =>
//     transition.toPage && GameService.changePageAndApplyEffects(transition.toPage, effects)
//   const className = classnames(styles.component, {
//    [styles.disabled]: transition.toPage === null || incompleteCondition,
//   })

//   return (
//     <Button
//       domProps={{
//         onClick,
//       }}
//       className={className}
//     >
//       {transition.text}
//       {!transition.toPage && <div>Page de destination manquante</div>}
//       {!!incompleteCondition && <div>Condition incomplète</div>}
//     </Button>
//   )
// }

export default GameTransition

