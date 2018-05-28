const address = '0x3270360EDE054CbA2eF829af1e124c4D6e0f8a60'; // Mainnet contract address change this
const ABI = [
   {
      "constant":false,
      "inputs":[

      ],
      "name":"withdraw",
      "outputs":[

      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "name":"_row",
            "type":"uint256"
         },
         {
            "name":"_column",
            "type":"string"
         },
         {
            "name":"_value",
            "type":"string"
         }
      ],
      "name":"put",
      "outputs":[

      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[

      ],
      "name":"owner",
      "outputs":[
         {
            "name":"",
            "type":"address"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[

      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"constructor"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "name":"_row",
            "type":"uint256"
         },
         {
            "indexed":true,
            "name":"_column",
            "type":"bytes32"
         },
         {
            "indexed":true,
            "name":"_value",
            "type":"bytes32"
         }
      ],
      "name":"Table",
      "type":"event"
   }
];

module.exports = { ABI, address };
