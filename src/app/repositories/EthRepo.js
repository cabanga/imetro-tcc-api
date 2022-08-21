import Web3 from 'web3'
const env = process.env

const provider = new Web3.providers.WebsocketProvider('ws://localhost:7545');
let web3 = new Web3(provider)

export default {

    async create_transation(data) {
        let accounts = await web3.eth.getAccounts()

        data.status = 'Activo'

        let data_info = web3.utils.toHex(data)

        const createTransaction = await web3.eth.accounts.signTransaction(
            {
                from: accounts[0],
                to: accounts[1],
                value: web3.utils.toWei('10', 'ether'),
                gas: '23544',
                data: data_info
            },
            env.privKey
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