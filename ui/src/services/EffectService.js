class EffectService {
  effect = {
    object: {
      label: 'L\'objet',
      value: 'object',
      add: {
        label: 'est ajouté',
        exec: (value, modifier) => {},
      },
      remove: {
        label: 'est retiré',
        exec: () => {},
      },
    },
    stat: {
      label: 'La statistique',
      value: 'stat',
      inc: {
        label: 'augmente de',
        value: 'inc',
        exec: (value, modifier) => value + modifier,
      },
      dec: {
        label: 'diminue de',
        value: 'dec',
        exec: (value, modifier) => value - modifier,
      },
      mul: {
        label: 'est multiplié par',
        value: 'mul',
        exec: (value, modifier) => value * modifier,
      },
      div: {
        label: 'est divisé par',
        value: 'div',
        exec: (value, modifier) => value / modifier,
      },
      aff: {
        label: 'est remplacé par',
        value: 'aff',
        exec: (value, modifier) => modifier,
      },
    },
  }

  condition = {
    label: 'Condition',
    object: {
      label: 'L\'objet',
      value: 'object',
      own: {
        label: 'est possédé',
        exec: () => {},
      },
      doNotOwn: {
        label: 'n\'est pas possédé',
        exec: () => {},
      },
    },
    stat: {
      label: 'La statistique',
      value: 'stat',
      equal: {
        label: 'est égal à',
        exec: (initValue, conditionValue) => initValue === conditionValue,
      },
      notEqual: {
        label: 'est différent de',
        exec: (initValue, conditionValue) => initValue !== conditionValue,
      },
      more: {
        label: 'est supérieur à',
        exec: (initValue, conditionValue) => initValue > conditionValue,
      },
      less: {
        label: 'est inférieur à',
        exec: (initValue, conditionValue) => initValue < conditionValue,
      },
      moreOrEqual: {
        label: 'est supérieur ou égale à',
        exec: (initValue, conditionValue) => initValue >= conditionValue,
      },
      lessOrEqual: {
        label: 'est inférieur ou égale à',
        exec: (initValue, conditionValue) => initValue <= conditionValue,
      },
    },
  }

  conditionOperator = {
    and: {
      label: 'ET',
      value: 'and',
      exec: () => {},
    },
    or: {
      label: 'OU',
      value: 'or',
      exec: () => {},
    },
  }
}

export default new EffectService()
