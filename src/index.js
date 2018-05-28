const { GraphQLServer } = require('graphql-yoga');
const { address } = require("../constants/database.js");
const { getOwner, pastEvents, filteredEvents } = require("./eth.js");

const resolvers = {
  Query: {
    description: () => `Ciel, a GraphQL library for querying smart contract events`,
    author: () => 'Ghilia Weldesselasie | @ghiliweld on all social networks',
    address: () => address,
    owner: () => getOwner(),
    event: (args) => filteredEvents(args.row), // not complete
    events: () => pastEvents()
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(() => console.log(`The server is running on http://localhost:4000`))
