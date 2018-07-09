import EffectService from 'services/EffectService'

const throwIncompleteConditionError = () => {
  throw new Error('Condition incomplète')
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
  return null
}


const checkTransitionVisibility = (game, transition) => {
  const { conditionOperator, conditions } = transition
  const { sumConditions, defaultBool } = EffectService.conditionOperator[conditionOperator]
  return conditions.reduce((acc, condition) =>
    sumConditions(acc, evaluateCondition(game, condition)), defaultBool)
}

const applyStatEffect = (game, effect) => {
  const { stats } = game
  const { type, subject, operator, value } = effect
  return {
    ...game,
    stats: {
      ...game.stats,
      [subject]: EffectService.effect[type][operator].exec(stats[subject], value),
    },
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

const applyEffect = (game, effect) => {
  if (effect.type === 'stat') {
    return applyStatEffect(game, effect)
  }
  if (effect.type === 'object') {
    return applyItemEffect(game, effect)
  }
  throw new Error('effect.type not valid')
}

const getDestination = (game, transitionId) => game.book.transition[transitionId].toPage
const changePage = (game, transitionId) => ({
  ...game,
  currentPageId: getDestination(game, transitionId),
}) 

const applyEffects = (game, effects) =>
  effects.reduce((updatedGame, effect) => applyEffect(updatedGame, effect), game)

const getTransitionEffects = (game, transitionId) => game.book.transition[transitionId].effects.map(id => game.book.effect[id])
const applyTransitionEffects = (game, transitionId) => applyEffects(game, getTransitionEffects(game, transitionId))

const getPageEffects = (game, pageId) => game.book.page[pageId].effects.map(id => game.book.effect[id])
const applyPageEffects = (game, pageId) => applyEffects(game, getPageEffects(game, pageId))

const easier = (game) => ({
  get: () => game,
  applyTransitionEffects: transitionId => easier(applyTransitionEffects(game, transitionId)),
  changePage: transitionId => easier(changePage(game, transitionId)),
  applyDestinationPageEffects: () => easier(applyPageEffects(game, game.currentPageId)),
})

const changePageAndApplyEffects = (game, transitionId) => easier(game)
  .applyTransitionEffects(transitionId)
  .changePage(transitionId)
  .applyDestinationPageEffects()
  .get()

export default {
  checkTransitionVisibility,
  changePageAndApplyEffects,
}
