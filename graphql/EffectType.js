const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
} = require('graphql/type')

const type = new GraphQLObjectType({
  name: 'effect',
  fields: () => ({
    operator: {
      type: GraphQLString,
    },
    subject: {
      type: GraphQLString,
    },
    value: {
      type: GraphQLString,
    },
    type: {
      type: GraphQLString,
    },
  })
})

module.exports = {
  type,
}
