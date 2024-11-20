const express = require('express');
const cors = require('cors');
//const router = require('express').Router();
const mongoose = require('mongoose');

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://erm:tetraxi123@cluster0.enmfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
const port = process.env.PORT || 4000;


app.use(cors());
app.use(express.json({limit: '500kb'}));

//const uri = process.env.ATLAS_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
require('dotenv').config({ path: './.env' });


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const user = require('./user');
const risk = require('./risk');

app.use('/user',user);
app.use('/risk',risk);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
}); 


//----------------------------------------------------

/*


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://pubmail700:<password>@cluster0.jrletgw.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




*/

