import Web3 from 'web3'
const provider = new Web3.providers.WebsocketProvider('ws://localhost:8545');
let web3 = new Web3(provider)

// Variables definition
const privKey = '0xb5ec0e93384528d816367b512fd0b8a471df67ae4a414d5b7d2d40298fa4d042'; // Genesis private key
const addressFrom = '0xFf6242FcBCA340D300473E9CE73cb7e51c0c3cb8';
const addressTo = '0xF4A786a4877Ef8dc8619CA751c34ce40b5b80854';


export default {

    async create_transation(data) {

        let data_info = web3.utils.toHex(data)
        const createTransaction = await web3.eth.accounts.signTransaction(
            {
                from: addressFrom,
                to: addressTo,
                value: web3.utils.toWei('10', 'ether'),
                gas: '23544',
                data: data_info
            },
            privKey
        )

        const createReceipt = await web3.eth.sendSignedTransaction(
            createTransaction.rawTransaction
        )

        return await Object(createReceipt)
    }

}