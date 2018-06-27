/* eslint-disable */

class EffectService {
  effect = {
    object: {
      label: 'L\'objet',
      add: {
        label: 'est ajouté',
        exec: (objectId, objectArray) => [ ...objectArray, objectId ],
      },
      remove: {
        label: 'est retiré',
        exec: (objectId, objectArray) => objectArray.filter(id => id != objectId),
      },
    },
    stat: {
      label: 'La statistique',
      inc: {
        label: 'augmente de',
        value: 'inc',
        exec: (value, modifier) => Math.round(parseFloat(value) + parseFloat(modifier)),
      },
      dec: {
        label: 'diminue de',
        value: 'dec',
        exec: (value, modifier) => Math.round(parseFloat(value) - parseFloat(modifier)),
      },
      mul: {
        label: 'est multiplié par',
        value: 'mul',
        exec: (value, modifier) => Math.round(parseFloat(value) * parseFloat(modifier)),
      },
      div: {
        label: 'est divisé par',
        value: 'div',
        exec: (value, modifier) => Math.round(parseFloat(value) / parseFloat(modifier)),
      },
      aff: {
        label: 'est remplacé par',
        value: 'aff',
        exec: (value, modifier) => Math.round(parseFloat(modifier)),
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
        exec: (initValue, conditionValue) =>  parseFloat(initValue) === parseFloat(conditionValue),
      },
      notEqual: {
        label: 'est différent de',
        exec: (initValue, conditionValue) => parseFloat(initValue) !== parseFloat(conditionValue),
      },
      more: {
        label: 'est supérieur à',
        exec: (initValue, conditionValue) => parseFloat(initValue) > parseFloat(conditionValue),
      },
      less: {
        label: 'est inférieur à',
        exec: (initValue, conditionValue) => parseFloat(initValue) < parseFloat(conditionValue),
      },
      moreOrEqual: {
        label: 'est supérieur ou égale à',
        exec: (initValue, conditionValue) => parseFloat(initValue) >= parseFloat(conditionValue),
      },
      lessOrEqual: {
        label: 'est inférieur ou égale à',
        exec: (initValue, conditionValue) => iparseFloat(initValue) <= parseFloat(conditionValue),
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
