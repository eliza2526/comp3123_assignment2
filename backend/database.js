const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://elizabeththomas2:aDyfsOmIiBFs3OL3@cluster0.u4oyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
client.connect();

async function employees() {
    try {
        const dataset = await client.db('test').collection('employees').find().toArray();
        return JSON.stringify(dataset);
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}
module.exports = {employees};