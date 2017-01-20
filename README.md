# React Bitcoin Wallet

A Bitcoin wallet sample application using React.

> **WARNING: IT'S ONLY A SAMPLE! If you use this sample with real bitcoins, you do so at your own risk.**

The purpose: learning React & Blockchain/Bitocin.

We are using [BlockCypher](https://www.blockcypher.com/) API for the backend.

This app was inspired by another [PHP Bitcoin wallet sample](https://github.com/blockcypher/php-wallet-sample).

## Domain

- Users can login using a BlockCypher token. DONE.
- Users can create Bitcoin wallets for mainnet (real bitcoins), testnet (Bitcoin test coins), or BlockCypher test chain (development chain). DONE.
- Users can list their wallets. DONE.
- Users can generate and remove new addresses in the wallet. DONE.
- Users can see their wallets balance. PENDING.
- Users can see their addresses balance. PENDING.
- Users can fund their addresses using BlockCypher [faucet](https://www.blockcypher.com/dev/bitcoin/#testing). PENDING.
- Users can receive funds in their wallets. PENDING.
- Users can spend funds from their wallet. PENDING.

For the time being we are only using normal wallets, instead of HD Wallets. That could be a new feature the future.

## Installation

1. Clone this repo: `git clone https://github.com/blockchainkatas/react-bitcoin-wallet.git`
2. Run `npm install`
3. Start the development server with `npm start`
4. Point your browser to http://localhost:8080

> WARNING: There is an issue pending to fix regarding using `strictSSL:true`option in BlockCypher (bcpher.js) API requests.

You will need a BlockCypher token.

## TROUBLESHOOTING

### SSL Error

```
Error: SSL Error: https://api.blockcypher.com/v1/bcy/test/wallets/test01/addresses?token=XX does not support SSL
```

To avoid that problem you have to replace `strictSSL:true` by `strictSSL:false` in file `node_modules/blockcypher/lib/bcpher.js`.

> WARNING: That should be avoid in production environments but this is only a sample for learning purposes. Please DO NOT USE a BlockCypher token
> with real bitcoins.

## KNOWN BUGS ANS ISSUES

* If you create a wallet whose name contains spaces addresses will be not listed correctly. More info [here](https://github.com/blockcypher/node-client/issues/14).

## Roadmap

* CI with Travis and CD to [Firebase](https://firebase.google.com).
* Use [Redux](http://redux.js.org/).
* HD Wallets.
* Colored coin wallet like [coinsprism.com](https://www.coinprism.com/).

## TODO

> PENDING: Create issues for concrete tasks.

* Finish all domain specifications.
* Testing.
* Use (nested routes)(https://github.com/reactjs/react-router-tutorial/tree/master/lessons/04-nested-routes) for shared components like Menu, or any other parts you think you can improve.
* Some actions take a long time to complete: for instance create a new wallet.
* Add links to BlockCypher API endpoints (like wallets list page h1 title).
* Catch BlockCypher response 429 (Too Many Requests) and show friendly message.
* Show BlockCypher response errors (for example when user uses invalid BlockCypher token).

## References

- [BlockCypher API docs](https://www.blockcypher.com/dev/bitcoin/)
