
var express = require('express');
var router = express.Router();
var axios = require('axios');

var FileReader = require('filereader')

var FileAPI = require('file-api')
  , File = FileAPI.File

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

var ipfsAPI = require('ipfs-api')
var ipfs = ipfsAPI({host: '34.211.140.66', port: '5001', protocol: 'http'})

const PINKY_CONTRACT = require('../build/contracts/Pinkies.json')
//const PINKY_CONTRACT = path.resolve(__dirname, '..', 'build', 'contracts', 'Pinkies.json');

const provider = new Web3Subprovider(new Web3.providers.HttpProvider('http://34.211.140.66:8545'));

const engine = new ProviderEngine();
engine.addProvider(new FilterSubprovider());
engine.addProvider(provider);
engine.start();

var web3 = new Web3(provider);

function loadContract(file, provider) {
    return new Promise(function (resolve, reject) {
        let contract = TruffleContract(PINKY_CONTRACT);
        contract.setProvider(provider);
        contract.defaults({address: '0xea319384136c07fa4aac17c54255216dd63ade97', gas: 45000}); //from address in ganache init
        resolve(contract);
    });
}

const addedPinky = async(function (stringValue) {
    let loadedPinkyContract = await(loadContract(PINKY_CONTRACT, engine));
    let pinkyContract = await(loadedPinkyContract.at('0xea319384136c07fa4aac17c54255216dd63ade97'))
    let pinkyReturn = await(pinkyContract.addPinky(10, {from: '0x751ba36e76505006d7aaf004a95071ca6e661c34'})); //same as truffle from
    return pinkyReturn.toString();
});

const buyPinky = async(function (priceValue) {
    let loadedPinkyContract = await(loadContract(PINKY_CONTRACT, engine));
    let pinkyContract = await(loadedPinkyContract.at('0xea319384136c07fa4aac17c54255216dd63ade97'))
    let pinkyReturn = await(pinkyContract.buyPinky(priceValue, {from: '0x751ba36e76505006d7aaf004a95071ca6e661c34'})); //same as truffle from
    return pinkyReturn.toString();
});

router.post('/buyToken', function(req, res, next) {
  buyPinky(req.body.price).then(function(pinkyReturn) {
    console.log('inside pinky callback');
    console.log('return=' + pinkyReturn);
    // res.json({'success': 'hello there sailor'})
  }).catch((error)=>{
    console.log('there was an error : ', error);
  });
  res.send('respond with a resource');
});


router.get('/addPinky', function(req, res, next) {
  addedPinky('hello there sailor').then(function(pinkyReturn) {
    console.log('inside pinky callback');
    console.log('addedReturn=' + pinkyReturn);
    // res.json({'success': 'hello there sailor'})
  }).catch((error)=>{
    console.log('there was an error : ', error);
  });
  res.send('respond with a resource');
});

router.post('/addPic', function(req,res,next){
  console.log('value of req.body.pic: ', req.body.pic);
  const reader = new FileReader();
  var url;
  reader.onload = function() {
    console.log("1");
    const buf = Buffer.from(reader.result) // Convert data into buffer
    console.log("2");
    console.log('buf : ', buf);
    ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
      if(err) {
        console.error(err)
        return
      }
      url = `https://ipfs.io/ipfs/${result[0].hash}`
      console.log(`value of hash:${result[0].hash}`);

      res.json({'url': url});
    })
  }
  console.log("01");

  fs.writeFile("../tmp.txt", req.body.pic, function(err) {
      if(err) {
          return console.log(err);
      }else{
        var file = new File("../tmp.txt");
        reader.readAsDataURL(file);
      }
  });

   // Read Provided File
  console.log("02");
})





module.exports = router;
