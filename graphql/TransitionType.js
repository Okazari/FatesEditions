const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
} = require('graphql/type')

const EffectType = require('./EffectType')

const type = new GraphQLObjectType({
  name: 'Transition',
  fields: () => ({
    fromPage: {
      type: GraphQLID,
    },
    toPage: {
      type: GraphQLID,
    },
    text: {
      type: GraphQLString,
    },
    conditionOperator: {
      type: GraphQLString,
    },
    effects: {
      type: GraphQLList(EffectType.type)
    },
    conditions: {
      type: GraphQLList(EffectType.type)
    },
  })
})


// conditions: { type: [Schema.Types.Mixed], default: {} },
// effects: [Schema.Types.Mixed],

module.exports = {
  type,
}
