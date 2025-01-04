const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config()
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT

 async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect()
    console.log("Mongodb is connected")
    return client
}

module.exports = {createConnection}