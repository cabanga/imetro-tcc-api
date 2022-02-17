const Web3 = require('web3')
const provider = new Web3.providers.WebsocketProvider('ws://localhost:8545');
let web3 = new Web3(provider)


const info = async () => {

    let accounts = await web3.eth.getAccounts()
    let block = await web3.eth.getBlockNumber()
    let nodeInfo = await web3.eth.getNodeInfo()

    console.log(block)

    let hash_tans = '0x9ef2efda53c28362ad68cfc321aa8cafaf1b525d345832e5903c10dcc68aa884'
    let transaction = await web3.eth.getTransaction(hash_tans)

    let data = await web3.utils.toAscii(transaction.input)
    console.log(data)


}

info()