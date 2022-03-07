import Web3 from 'web3'

/* ================== PRD ================

const provider = new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/74281d1736ff4d23840f60dfddf151f8');
let web3 = new Web3(provider)

const privKey = 'e87ccff4f73d8d23fdffffb9293c40c681c1bf5299a3a820b8d12ede47efc3ca'
const addressFrom = '0x6EC582871EF4456aaf959A35770965BD33eb8AAa'
const addressTo = '0x07584f006f95064Bb0aD3802605b7cb2c7794225'
*/


const provider = new Web3.providers.WebsocketProvider('HTTP://127.0.0.1:7545');
let web3 = new Web3(provider)

const privKey = 'a57bf2e3bee9deb5a60d9daf05c132d7b439e206ba49340a7de28bddeaa168e3'
const addressFrom = '0x28B18fED36F28D83A08897fcFDF1A7437A980045'
const addressTo = '0x6e7fd2202C35c6AFe5cB4e748655c9765299cF1c'


export default {

    async create_transation(data) {

        data.status = 'Activo'

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
    },

    async info_transation(data) {
        let transaction = await web3.eth.getTransaction(data.transaction_hash)
        let response = await web3.utils.toAscii(transaction.input)
        return response
    }

}