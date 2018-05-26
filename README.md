# Ciel
A GraphQL library for querying smart contract events

Check out [this Twitter thread](https://twitter.com/ghiliweld/status/1000260078912655360) documenting the experiment.

You can interact with the Database contract [here](https://www.withpragma.com/share/2yV3VyCHwpOS) using Pragma (it's on the Rinkeby network).

The gas limit suggested by Metamask is usually around 40K gas while I found that usually around 26K is used. Still too expensive for my taste, I'll see how I can optimize this but the high cost is probably due to the use of string variables which are more expensive on the blockchain.
