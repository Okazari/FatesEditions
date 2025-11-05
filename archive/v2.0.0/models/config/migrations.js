var uriMongo = "mongodb://"+process.env.IP+':27017/myvirtualstorybook';
if(process.env["MONGODB_ADDON_URI"]){
  uriMongo = process.env["MONGODB_ADDON_URI"];
}

module.exports = {
// The location of the the mongoose module. Since mongoose-data-migrate
// needs to make a connection to mongodb, if you point to it here you'll
// be able to use the same connection in your migration files rather
// than creating a new connection.
mongoose: '../../node_modules/mongoose',

// mongodb connection string in mongoose format:
// 'mongodb://username:password@host:port/database?options...'
// See: http://mongoosejs.com/docs/connections.html
db: uriMongo,

// Name of the collection where the status of migrations
// are stored (defaults to 'migrations')
collection: 'migrations'
};