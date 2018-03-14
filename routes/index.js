
// var contract = require("truffle-contract");
// const TruffleContract = require('truffle-contract');
// var Web3 = require('web3');
// var pry = require('pryjs')

// const async = require('asyncawait/async');
// const await = require('asyncawait/await');
// const path = require('path');
// const fs = require('fs');
// // const TruffleContract = require('truffle-contract');
// // const Web3 = require('web3');
// const ethereumjsWallet = require('ethereumjs-wallet');
// const ProviderEngine = require('web3-provider-engine');
// const WalletSubprovider = require('web3-provider-engine/subproviders/wallet.js');
// const Web3Subprovider = require('web3-provider-engine/subproviders/web3.js');
// const FilterSubprovider = require('web3-provider-engine/subproviders/filters.js');

// const PINKY_CONTRACT = path.resolve(__dirname, '..', 'build', 'contracts', 'Pinkies.json');

// var ProviderEngine = require('web3-provider-engine');
// var Web3Subprovider = require('web3-provider-engine/subproviders/web3.js');
// var FilterSubprovider = require('web3-provider-engine/subproviders/filters.js');

// var web3Provider = new Web3.providers.HttpProvider("http://localhost:8545");

// const engine = new ProviderEngine();
// engine.addProvider(new FilterSubprovider);
// engine.addProvider(new Web3Subprovider(web3Provider));

// const promisify = (inner) =>
//   new Promise((resolve, reject) =>
//     inner((err, res) => {
//       if (err) { reject(err) }
//       resolve(res);
//     })
//   );

// const contract = require('truffle-contract');
//
// const TruffleContract = contract(require('../build/contracts/Pinkies.json'));
// TruffleContract.setProvider(web3.currentProvider);
//
// const Web3 = require('web3');
// var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
// var contract = require("truffle-contract");
// var pinky_artifacts = require('../build/contracts/Pinkies.json');
// var Pinkies = contract(pinky_artifacts);
//
// const accounts = await web3.eth.getAccounts();
// const contract = new web3.eth.Contract(contractArtifact.abi, { from: accounts[0] });
//
// const createdContract = await contract.deploy({
//   data: contractArtifact.bytecode,
// }).send();
//
// const instance = TruffleContract.at(createdContract.options.address);

// const accounts = await promisify(cb => web3.eth.getAccounts(cb));



// if (typeof web3 !== 'undefined') {
//     console.log("Using web3 detected from external source like Metamask");
//     web3 = new Web3(web3.currentProvider);
// } else {
//     console.log("Using localhost");
//     web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// }
//
// var account = web3.eth.accounts[0];
//
// console.log(account);




// var web3;
//
// web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//

//Pinkies.setProvider(web3.currentProvider);
// eval(pry.it)


// console.log("web3 currentProvider: ", web3.currentProvider);


// function loadContract(file, provider, address) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(file, 'utf-8', function (err, data) {
//             if (err) {
//                 reject(err);
//             } else {
//                 let contract = TruffleContract(JSON.parse(data));
//                 contract.setProvider(provider);
//                 contract.defaults({ from: address, gas: 4500000 });
//                 resolve(contract);
//             }
//         });
//     });
// }
//
// const addPinkiesAsync = async(function (addString) {
//     let PinkyContract = await(loadContract(PINKY_CONTRACT, engine, "http://localhost:3000"));
//     let pinkyContractDeployed = await(PinkyContract.deployed());
//     let addPinky = await(pinkyContractDeployed.addPinky(addString));
//     return addPinky.toString();
// });



// Pinkies.setProvider(web3.provider);
//dirty hack for web3@1.0.0 support for localhost testrpc, see https://github.com/trufflesuite/truffle-contract/issues/56#issuecomment-331084530
// if (typeof contract.currentProvider.sendAsync !== "function") {
//   contract.currentProvider.sendAsync = function() {
//     return contract.currentProvider.send.apply(
//       contract.currentProvider, arguments
//     );
//   };
// }

// Pinkies.setProvider(provider.currentProvider);

// /* GET home page. */
// router.get('/addPinky', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//
//   Pinkies.deployed().then(function(contractInstance) {
//     contractInstance.addPinky("hello there sailor").then(function(receipt) {
//       res.json({"success": parseInt(receipt.status, 16) === 1? "huzzah" : "womp womp" })
//     })
//   })
// });

/* GET home page. */



// router.get('/addPinky', function(req, res, next) {
//   async function addPinky() {
//       wei = promisify(cb => (cb))
//       try {
//           balance = web3.fromWei(await wei, 'ether')
//           document.getElementById("output").innerHTML = balance + " ETH";
//       } catch (error) {
//           document.getElementById("output").innerHTML = error;
//       }
//   }
//   addPinky();
//
//
//   // res.render('index', { title: 'Express' });
//
//   // Pinkies.deployed().then(async function(contractInstance) {
//   //  let receipt = await contractInstance.addPinky("hello there sailor")
//   //  res.json({"success": parseInt(receipt.status, 16) === 1? "huzzah" : "womp womp" })
//   // })
//
//   // addPinkiesAsync("hello there sailor").then(function(returnVal){
//   //   console.log('addPinkiesAsync return=' + returnVal);
//   //   res.json({'success': returnVal})
//   // }).catch(console.error);
//
//   // totalTokenIssued().then(function(totalToken) {
//   //  console.log('totalToken=' + totalToken);
//   // }).catch(console.error);
// });



// router.get('/addPinky', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//
//   // if (typeof Pinkies.currentProvider.sendAsync !== "function") {
//   //   Pinkies.currentProvider.sendAsync = function() {
//   //     return Pinkies.currentProvider.addPinky.apply("hello there sailor");
//   //   };
//   // }
//   //
//   // res.json({"values": "huzzah"})
//   Pinkies.deployed().then(function(contractInstance) {
//     contractInstance.addPinky("hello there sailor").then(function(receipt) {
//       res.json({"success": parseInt(receipt.status, 16) === 1? "huzzah" : "womp womp" })
//     })
//   })
// });

// router.get('/returnPinkies', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//
//   Pinkies.deployed().then(function(contractInstance) {
//     var gettedPinkies = contractInstance.returnPinkies()
//     console.log('value of gettedPinkies: ', gettedPinkies);
//     res.json({"values": gettedPinkies})
//   })
//
//   // var respinkies = null;
//   //
//   // if (typeof Pinkies.currentProvider.sendAsync !== "function") {
//   //   respinkies = Pinkies.currentProvider.sendAsync = function() {
//   //     return Pinkies.currentProvider.returnPinkies.apply();
//   //   };
//   // }
//   //
//   // res.json({"success": })
//
// });

var express = require('express');
var router = express.Router();

const async = require('asyncawait/async');
const await = require('asyncawait/await');
const path = require('path');
const fs = require('fs');
const TruffleContract = require('truffle-contract');
const Web3 = require('web3');
const ethereumjsWallet = require('ethereumjs-wallet');
const ProviderEngine = require('web3-provider-engine');
const WalletSubprovider = require('web3-provider-engine/subproviders/wallet.js');
const Web3Subprovider = require('web3-provider-engine/subproviders/web3.js');
const FilterSubprovider = require('web3-provider-engine/subproviders/filters.js');

const PINKY_CONTRACT = require('../build/contracts/Pinkies.json')
//const PINKY_CONTRACT = path.resolve(__dirname, '..', 'build', 'contracts', 'Pinkies.json');

const provider = new Web3Subprovider(new Web3.providers.HttpProvider('http://localhost:8545'));

const engine = new ProviderEngine();
engine.addProvider(new FilterSubprovider());
engine.addProvider(provider);
engine.start();

var web3 = new Web3(provider);

function loadContract(file, provider) {
    return new Promise(function (resolve, reject) {
        // fs.readFile(file, 'utf-8', function (err, data) {
        //     if (err) {
        //         reject(err);
        //     } else {
        //         console.log('else in loadContract function');
        //         let contract = TruffleContract(JSON.parse(data));
        //         contract.setProvider(provider);
        //         contract.defaults({ gas: 45000 });
        //         console.log('before resolve');
        //         resolve(contract);
        //         console.log('after resolve');
        //     }
        // });
        let contract = TruffleContract(PINKY_CONTRACT);
        contract.setProvider(provider);
        contract.defaults({address: '0x7add5e7fea32bc972785fd070c134169ed891195', gas: 45000});
        resolve(contract);
    });
}

const addedPinky = async(function (stringValue) {
    console.log('inside addedPinky');
    let loadedPinkyContract = await(loadContract(PINKY_CONTRACT, engine));
    console.log('1');
    //let pinkyContract = await(loadedPinkyContract.deployed());
    let pinkyContract = await(loadedPinkyContract.at('0x2e5fb40a1f4dc06967e5f1098638fab85c3ad1c5'))   
    let pinkyAddReturn = await(pinkyContract.pricePinky(10, {from: '0x1ac1bcd2a7ba72fd3fdcccce7a04d607bc022dad'}));
    return pinkyAddReturn.toString();
});

addedPinky('hello there sailor').then(function(addedReturn) {
    console.log('inside addPinky callback');
    console.log('addedReturn=' + addedReturn);
    // res.json({'success': 'hello there sailor'})
  }).catch((error)=>{
    console.log('there was an error : ', error);
  });
// router.get('/addPinky', function(req, res, next) {
//   console.log('inside addPinky');
//
//   addedPinky('hello there sailor').then(function(addedReturn) {
//     console.log('inside addPinky callback');
//     console.log('addedReturn=' + addedReturn);
//     res.json({'success': 'hello there sailor'})
//   }).catch((error)=>{
//     console.log('there was an error : ', error);
//   });
//
// });
router.get('/', function(req, res, next) {
    res.render('index', {title: "home"});
  });



module.exports = router;
