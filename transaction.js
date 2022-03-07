/*
const Web3 = require('web3');
const url = "HTTP://127.0.0.1:7545"
const web3 = new Web3(url);
*/

import Web3 from 'web3'
const provider = new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/74281d1736ff4d23840f60dfddf151f8');
let web3 = new Web3(provider)

const privKey = 'e87ccff4f73d8d23fdffffb9293c40c681c1bf5299a3a820b8d12ede47efc3ca'
const addressFrom = '0x6EC582871EF4456aaf959A35770965BD33eb8AAa'
const addressTo = '0x07584f006f95064Bb0aD3802605b7cb2c7794225'


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