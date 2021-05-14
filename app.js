const express = require('express')
var cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://admin:gigemaggies@cluster0.ovubn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/weather/:id', async (req, res) => {//USW00094870
    let data = []
    try {
      await client.connect()
      const db = client.db('weather')
      const weatherCollection = db.collection('2017')
      const query = { id: req.params.id };
      const result = await weatherCollection.findOne(query)
      console.log(result)
      res.send(result)
    }
    catch(err) {
      console.log(err)
    }
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})