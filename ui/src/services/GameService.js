// eslint-disable-next-line
import store from 'redux/store'
import { changeGameState } from 'redux/actions'
import EffectService from 'services/EffectService'

const GameService = {
  checkTransitionVisibility: ({ conditionOperator, conditions }) => {
    const { game: { stats, objects } } = store.getState()

    let incompleteCondition = false
    const defaultBool = conditionOperator === 'and'

    const evaluateCondition = ({ type, operator, subject, value }) => {
      if (!type || !operator || !subject) {
        throw new Error("Condition incomplète")
      }
      if (type === 'stat') {
        if (!value) {
          throw new Error("Condition incomplète")
        }
        return EffectService.condition[type][operator].exec(stats[subject], value)
      }
      if (type === 'object') {
        return EffectService.condition[type][operator].exec(subject, objects)
      }
      throw new Error("Condition incomplète")
    }

    const isVisible = conditionOperator === 'and'
    ? conditions.reduce(
      (acc, condition) => acc && evaluateCondition(condition),
      defaultBool,
    )
    : conditions.reduce(
      (acc, condition) => acc || evaluateCondition(condition),
      defaultBool,
    )
    return isVisible
  },

  changePageAndApplyEffects: (currentPageId, effects) => {
    const { game: { stats, objects } } = store.getState()
    let newStats = { ...stats }
    let newObjects = [...objects]

    const applyEffect = ({ type, subject, operator, value }) => {
      if (type === 'stat') {
        newStats = {
          ...newStats,
          [subject]: EffectService.effect[type][operator].exec(newStats[subject], value),
        }
      }
      if (type === 'object') {
        newObjects = EffectService.effect[type][operator].exec(subject, newObjects)
      }
    }
    effects.forEach(applyEffect)
    store.dispatch(changeGameState({ currentPageId, stats: newStats, objects: newObjects }))
  },

}

export default GameService
