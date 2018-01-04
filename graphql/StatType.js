const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
} = require('graphql/type')

const type = new GraphQLObjectType({
  name: 'Stat',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    initValue: {
      type: GraphQLInt,
    },
    max: {
      type: GraphQLInt,
    },
    min: {
      type: GraphQLInt,
    },
    visible: {
      type: GraphQLBoolean,
    }
  })
})

module.exports = {
  type,
}
