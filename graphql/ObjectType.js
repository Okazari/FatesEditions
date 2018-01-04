const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
} = require('graphql/type')

const type = new GraphQLObjectType({
  name: 'Object',
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    atStart: {
      type: GraphQLBoolean,
    },
    visible: {
      type: GraphQLBoolean,
    }
  })
})

module.exports = {
  type,
}
