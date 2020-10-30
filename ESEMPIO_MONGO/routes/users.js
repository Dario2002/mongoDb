var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb
//uri di connessione

router.get('/', function (req, res, next) {
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://dbanfi:dbanfi@cluster0.wbjdm.mongodb.net/<Cluster0>?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            console.log(result);
            res.send(result);
        }); //Eseguo la query e passo una funzione di callback

        client.close();
    });
    
});

module.exports = router;
