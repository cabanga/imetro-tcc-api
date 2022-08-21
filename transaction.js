
import Web3 from 'web3'
const url = "HTTP://127.0.0.1:7545"
const web3 = new Web3(url);


//import Web3 from 'web3'
//const provider = new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/74281d1736ff4d23840f60dfddf151f8');
//let web3 = new Web3(provider)

const privKey = 'c907fb8b00c3dbbbde7a696bad28f65a931afa99ee5dd4c1472e0ace4101b0c0'
const addressFrom = '0x8BC97c8e406229502c38c4760140499D0245EbEb'
const addressTo = '0xed303298d9Ee857a9E58E4370ED6280829D12a98'


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
            gas: '23544',
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