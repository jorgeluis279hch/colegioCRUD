// main.js

const { MongoClient } = require("mongodb");
const studentSchema = require("./studentSchemma"); // Importa el esquema

const uri =
  "mongodb+srv://user001:timer12@cluster0.nlcdx.mongodb.net/?retryWrites=true&w=majority"; // URL de conexión a MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true });

async function connectToDatabase() {
  await client.connect();
  return client.db("ColegioSB");
}

module.exports = {
  connectToDatabase,
};
