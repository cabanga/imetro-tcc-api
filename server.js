import { } from 'dotenv/config'
const env = process.env
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import fileupload from 'express-fileupload'





import ROUTES from './src/routes/index.js'

var app = express();
var port = process.env.port || env.APP_PORT

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(fileupload())


app.use('/api/', ROUTES);





app.listen(port, () => {
  console.log(`Server running In http://${env.APP_HOST}:${port}/api`);
})


/*

const url = 'HTTP://127.0.0.1:7545' // "https://eth-mainnet.alchemyapi.io/v2/Ty6kaYvH6OMi1MTrgUfVe9SJMS63I07O";

const Web3 = require('web3')

const provider = new Web3(new Web3.providers.HttpProvider(url));


provider.eth.getBlock('latest')
.then( response => {
    console.log(response)
})


*/





/*
async function latestTime () {
  const block = await web3.eth.getBlock('latest');
  return block.timestamp;
}
*/


































/*
require('dotenv/config')

const env = process.env

var express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')

var app = express();
var port = process.env.port || env.APP_PORT

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var EmisController = require('./src/app/EmisController')
app.get('/', EmisController.store)


app.listen(port, () => {
    console.log(`Server running In http://${env.APP_HOST}:${env.APP_PORT}`);
})

*/