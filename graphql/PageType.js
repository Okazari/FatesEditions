const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
} = require('graphql/type')

const TransitionType = require('./TransitionType')
const EffectType = require('./EffectType')

const type = new GraphQLObjectType({
  name: 'Page',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    text: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    backgroundMusic: {
      type: GraphQLString,
    },
    effects: {
      type: GraphQLList(EffectType.type)
    },
    transitions: {
      type: GraphQLList(TransitionType.type)
    },
  })
})

  // effects: [Schema.Types.Mixed],

module.exports = {
  type,
}
