const { GraphQLServer } = require('graphql-yoga');
const { address } = require("../constants/database.js");
const { getOwner, pastEvents, filteredEvents, latestEvent, latestFilteredEvent } = require("./eth.js");

const resolvers = {
  Query: {
    description: () => `Ciel, a GraphQL library for querying smart contract events`,
    author: () => 'Ghilia Weldesselasie | @ghiliweld on all social networks',
    address: () => address,
    owner: () => getOwner(),
    event: (_, { row }) => filteredEvents(row),
    events: () => pastEvents(),
    latest: () => latestEvent(),
    latestFiltered: (_, { row }) => latestFilteredEvent(row)
  },
  Event: {
    event: (root) => root.event,
    signature: (root) => root.signature,
    address: (root) => root.address,
    returnValues: (root) => root.returnValues,
    logIndex: (root) => root.logIndex,
    transactionIndex: (root) => root.transactionIndex,
    transactionHash: (root) => root.transactionHash,
    blockHash: (root) => root.blockHash,
    blockNumber: (root) => root.blockNumber
  },
  ReturnValue: {
    _row: (root) => root._row,
    _column: (root) => root._column,
    _value: (root) => root._value
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(() => console.log(`The server is running on http://localhost:4000`))
