// eslint-disable-next-line
import store from 'redux/store'
import { changeGameState } from 'redux/actions'
import EffectService from 'services/EffectService'

const GameService = {
  checkTransitionVisibility(transition, game) {
    const { conditionOperator, conditions } = transition
    const { sumConditions, defaultBool } = EffectService.conditionOperator[conditionOperator]
    return conditions.reduce((acc, condition) => sumConditions(acc, this.evaluateCondition(condition, game)),
      defaultBool
    )    
  },
  
  throwIncompleteConditionError() {
    throw new Error("Condition incomplète")
  },

  evaluateCondition(condition, game) {
    const { type, operator, subject, value } = condition
    const { stats, objects } = game
    if (!type || !operator || !subject) {
      this.throwIncompleteConditionError()
    }
    if (type === 'stat') {
      if (!value) {
        this.throwIncompleteConditionError()
      }
      return EffectService.condition[type][operator].exec(stats[subject], value)
    }
    if (type === 'object') {
      return EffectService.condition[type][operator].exec(subject, objects)
    }
    this.throwIncompleteConditionError()
  },

  changePageAndApplyEffects(currentPageId, effects) {
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
