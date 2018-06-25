class EffectService {
  effect = {
    object: {
      label: 'L\'objet',
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
      own: {
        label: 'est possédé',
        exec: (objectId, objectsArray) => objectsArray.includes(objectId),
      },
      doNotOwn: {
        label: 'n\'est pas possédé',
        exec: (objectId, objectsArray) => !objectsArray.includes(objectId),
      },
    },
    stat: {
      label: 'La statistique',
      equal: {
        label: 'est égal à',
        exec: (initValue, conditionValue) => initValue == conditionValue,
      },
      notEqual: {
        label: 'est différent de',
        exec: (initValue, conditionValue) => initValue != conditionValue,
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
      exec: () => {},
    },
    or: {
      label: 'OU',
      exec: () => {},
    },
  }
}

export default new EffectService()
