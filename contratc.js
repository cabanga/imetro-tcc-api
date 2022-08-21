import moment from 'moment'
import Web3 from 'web3'

const provider = new Web3.providers.WebsocketProvider('ws://localhost:7545');
let web3 = new Web3(provider)

const privKey = 'a296b24ee7fd7d63ac6ddd097a7aa15668c91be00db8ea9f6c22163f6e243cb3'; // Genesis private key
const addressFrom = '0x5A97A99d30B22aD2485ABb988E04829D43E72b36';
const addressTo = '0x691Bf86f4BDE3c1E0b7C9061ef75D442DCE19924';


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