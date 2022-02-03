const Web3 = require('web3');

// Variables definition

/*
const privKey = 'e912c7a921bc3eee8b660d1c743452ed18e8143034f4f06bbf4850da30901e7d'; // Genesis private key
const addressFrom = '0xb083ceB513Ba86012476916c342B180e28F669Cb';
const addressTo = '0xe8d9Aa8B8A2d1B10b96c9245a56aACf873C5a3F6';
*/

const url = "HTTP://127.0.0.1:7545"

class TransactionChecker {
    constructor(address) {
        this.address = address.toLowerCase();
        this.web3 = new Web3(url);
    }

    async checkBlock() {
        let block = await this.web3.eth.getBlock(1);
        let number = block.number;
        let transactions = block.transactions;
        

        if (block != null && block.transactions != null) {

            for (let txHash of block.transactions) {
                let tx = await this.web3.eth.getTransaction(txHash);

                console.log(Object(tx))
                if (this.address == tx.to.toLowerCase()) {
                    console.log("from: " + tx.from.toLowerCase() + " to: " + tx.to.toLowerCase() + " value: " + tx.value);
                }
                
            }
        }
    }

    async getBlock(number){
        let block = await this.web3.eth.getBlock(number);
        console.log("new block :", block)
    }
}

var transactionChecker = new  TransactionChecker('0xb083ceB513Ba86012476916c342B180e28F669Cb');
//transactionChecker.checkBlock();
//transactionChecker.getBlock(1)

