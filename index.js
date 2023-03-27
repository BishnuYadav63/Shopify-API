/*const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/" 

const database ='Shopify'
const client = new MongoClient(url);

 async function getData()
{
    let result = await client.connect();
    let db = result.db(database); 
    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();
*/


const connectToMongo = require('./db');
const express = require('express')
//var cors = require('cors') 

connectToMongo();
const app = express()
const port = 9000

app.get('/',(req,res) => {
    res.send('hello world')

})

app.listen(port, () => {
    console.log(`Example backend listening at http://localhost:${port}`)
  })
  

  
