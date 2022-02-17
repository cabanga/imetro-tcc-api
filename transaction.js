/*
const Web3 = require('web3');
const url = "HTTP://127.0.0.1:7545"
const web3 = new Web3(url);
*/

const Web3 = require('web3')
const provider = new Web3.providers.WebsocketProvider('ws://localhost:8545');
let web3 = new Web3(provider)



// Variables definition
const privKey = '0xfdf95c08f8fde0a56776dc58e6c0c8c9fe01768be1461632fcadc5d04d08c284'; // Genesis private key
const addressFrom = '0xb685B41D93d0727Cf0358231086B075F889114DD';
const addressTo = '0x2946d174cE68Ce711D43F5A434C98F498bE91cb2';



const deploy = async () => {

    let data = {
        hash_file: "1234567890",
        file_name: "jm-monografia",
        register_date: "2022-02-11 18:59:00"
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
    const createReceipt = await web3.eth.sendSignedTransaction(
        createTransaction.rawTransaction
    );

    console.log(`Transaction successful with hash: ${await Object(createReceipt)}`);

}

deploy()