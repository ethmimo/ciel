const Web3 = require("web3");
const { address, ABI } = require("../constants/database.js");

const infura = new Web3(new Web3.providers.HttpProvider('ENDPOINT'));
const contract = new infura.eth.Contract(ABI, address);

const keccak = (element) => infura.utils.soliditySha3(element) // function that keccak256 hashes elements like in Solidity

const getOwner = () => contract.methods.owner().call();
const pastEvents = () => contract.getPastEvents('Table', {
    fromBlock: 0,
    toBlock: 'latest'
}).catch(function(error) {
  console.log(error);
});

// Not complete yet
const filteredEvents = (row) => contract.getPastEvents('Table', {
    filter: {_row: row},
    fromBlock: 0,
    toBlock: 'latest'
}).catch(function(error) {
  console.log(error);
});

module.exports = { contract, getOwner, pastEvents, filteredEvents };
