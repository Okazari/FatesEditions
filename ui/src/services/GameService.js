// eslint-disable-next-line
import store from 'redux/store'
import { changeGameState } from 'redux/actions'
import EffectService from 'services/EffectService'

const checkTransitionVisibility = (game, transition) => {
  const { conditionOperator, conditions } = transition
  const { sumConditions, defaultBool } = EffectService.conditionOperator[conditionOperator]
  return conditions.reduce((acc, condition) => sumConditions(acc, evaluateCondition(game, condition)),
    defaultBool
  )    
}
  
const throwIncompleteConditionError = () => {
  throw new Error("Condition incomplète")
}

const evaluateCondition = (game, condition) => {
  const { type, operator, subject, value } = condition
  const { stats, objects } = game
  if (!type || !operator || !subject) {
    throwIncompleteConditionError()
  }
  if (type === 'stat') {
    if (!value) {
      throwIncompleteConditionError()
    }
    return EffectService.condition[type][operator].exec(stats[subject], value)
  }
  if (type === 'object') {
    return EffectService.condition[type][operator].exec(subject, objects)
  }
  throwIncompleteConditionError()
}

const changePageAndApplyEffects = (game, transitionId) => {
  transitionEffects = game.book.transition[transitionId].conditions.map(id => game.book.condition[id])
  
  const updatedGame = transitionEffects.reduce((updatedGame, effect) => applyEffect(updatedGame, effect), game)
  
  // const { stats, objects } = game
  // let newStats = { ...stats }
  // let newObjects = [...objects]
  // const applyEffect = ({ type, subject, operator, value }) => {
  //   if (type === 'stat') {
  //     newStats = {
  //       ...newStats,
  //       [subject]: EffectService.effect[type][operator].exec(newStats[subject], value),
  //     }
  //   }
  //   if (type === 'object') {
  //     newObjects = EffectService.effect[type][operator].exec(subject, newObjects)
  //   }
  // }
  // effects.forEach(applyEffect)
  // store.dispatch(changeGameState({ currentPageId, stats: newStats, objects: newObjects }))
}
  
const applyEffect = (game, effect) => {
  
  const applyStatEffect = (game, effect) => {
    const { stats } = game
    const { type, subject, operator, value } = effect
    return {
      ...game,
      stats: {
        ...game.stats,
        [subject]: EffectService.effect[type][operator].exec(stats[subject], value),
    }
  }

  const applyItemEffect = (game, effect) => {
    const { objects } = game
    const { type, subject, operator } = effect
    return {
      ...game,
      objects: EffectService.effect[type][operator].exec(subject, objects),
    }
  }

  if (effect.type === 'stat') {
    return applyStatEffect(game, effect)
  }
  if (effect.type === 'object') {
    return applyItemEffect(game, effect)
  }
}

export default {
  checkTransitionVisibility,
  changePageAndApplyEffects,
}
