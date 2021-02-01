const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile.js');

const provider = new HDWalletProvider(
  'pumpkin coach pottery sock sense resist tenant satoshi endless decrease pumpkin boat',
  'https://rinkeby.infura.io/v3/355cf63727a547308fe1b85136a0dee1'
);
const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempt to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({data: '0x' + bytecode, arguments: ['Hi there!']})
     .send({from: accounts[0]});

  console.log('Contract deployed to', result.options.address);
};

deploy();
