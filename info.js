import Web3 from 'web3'
const env = process.env

const provider = new Web3.providers.WebsocketProvider('HTTP://localhost:7545')
let web3 = new Web3(provider)


const info = async () => {
    let accounts = await web3.eth.getAccounts()
    let block = await web3.eth.getBlockNumber()
    let nodeInfo = await web3.eth.getNodeInfo()

    let hash_tans = '0x87ce15fb80b62caac9df692f8554527d9f5a234c434111973b70410b3fcaec6c'
    let transaction = await web3.eth.getTransaction(hash_tans)

    let data = await web3.utils.toAscii(transaction.input)
    console.log(data)


}

info()