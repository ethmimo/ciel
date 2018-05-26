const Web3 = require("web3");
const { address, ABI } = require("../constants/database.js");

const infura = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/51AwWne0Nn1feikQwUXb")); // Rinkeby address
const contract = new infura.eth.Contract(ABI, address);

const getOwner = () => contract.methods.owner().call();
const pastEvents = async () => await contract.getPastEvents('Table');

module.exports = { contract, getOwner, pastEvents };
