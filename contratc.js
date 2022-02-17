const moment = require('moment')

const Web3 = require('web3')
const provider = new Web3.providers.WebsocketProvider('ws://localhost:8545');
let web3 = new Web3(provider)

const privKey = '0x8bcab33055102bb984d22d084865398743d855043ffa4174ed67bb440eac1b2a'; // Genesis private key
const addressFrom = '0x7fcDCb8c6aA678394781fe7F00652dAa63b70A53';
const addressTo = '0xD5685B45e67e39d4Df74799e4AE85DFc388D94E7';


const contract = async () => {

    let accounts = await web3.eth.getAccounts()
    let block = await web3.eth.getBlockNumber()
    let nodeInfo = await web3.eth.getNodeInfo()

    let data = {
        hash_file: "1234567890",
        file_name: "jm-monografia",
        register_date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
    }

    let data_info = web3.utils.toHex(data);

    const createTransaction = await web3.eth.accounts.signTransaction(
        {
            from: addressFrom,
            to: addressTo,
            value: web3.utils.toWei('10', 'ether'),
            gas: '22472',
            data: data_info
        },
        privKey
    );

    // Deploy transaction
    const receptor = await web3.eth.sendSignedTransaction(
        createTransaction.rawTransaction
    );

    console.log(`Successful with hash: ${receptor.transactionHash}`);


}

contract()