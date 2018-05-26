const address = "0xb37089817bb126a897a96d94a2833a4ebbcfad12"; // Rinkeby contract address
const ABI = [
  // ABI from Pragma, withpragma.com
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
            "type":"string"
         },
         {
            "indexed":true,
            "name":"_value",
            "type":"string"
         }
      ],
      "name":"Table",
      "type":"event"
   }
];

module.exports = { ABI, address };
