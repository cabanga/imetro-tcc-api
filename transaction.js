const Web3 = require('web3');

// Variables definition
const privKey = 'e912c7a921bc3eee8b660d1c743452ed18e8143034f4f06bbf4850da30901e7d'; // Genesis private key
const addressFrom = '0xb083ceB513Ba86012476916c342B180e28F669Cb';
const addressTo = '0xe8d9Aa8B8A2d1B10b96c9245a56aACf873C5a3F6';

const url = "HTTP://127.0.0.1:7545"
const web3 = new Web3(url);

const deploy = async () => {
    console.log(
       `Attempting to make transaction from ${addressFrom} to ${addressTo}`
    );
 
    const createTransaction = await web3.eth.accounts.signTransaction(
       {
            from: addressFrom,
            to: addressTo,
            value: web3.utils.toWei('10', 'ether'),
            gas: '21000'
       },
       privKey
    );

    // Deploy transaction
    const createReceipt = await web3.eth.sendSignedTransaction(
        createTransaction.rawTransaction
    );

    console.log(`Transaction successful with hash: ${await Object( createReceipt ) }`);

}

deploy()