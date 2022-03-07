import Web3 from 'web3'

const provider = new Web3.providers.WebsocketProvider('HTTP://127.0.0.1:7545')
let web3 = new Web3(provider)


const info = async () => {
    let accounts = await web3.eth.getAccounts()
    let block = await web3.eth.getBlockNumber()
    let nodeInfo = await web3.eth.getNodeInfo()

    console.log(block)

    let hash_tans = '0x2ffc8ef834c7d9d709d6c8f8b97da0247b25346bd37ea10bcd3cdf79fddcee63'
    let transaction = await web3.eth.getTransaction(hash_tans)

    let data = await web3.utils.toAscii(transaction.input)
    console.log(data)


}

info()