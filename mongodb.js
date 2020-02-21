const {MongoClient, ObjectID} = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName  = 'task-manager';

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     name : 'Somnath',
    //     age : 23
    // }).then(data => console.log(data)).catch(error => console.log(error))
     db.collection('users').deleteMany({
            name : 'Somnath'
     }).then(data => console.log(data.deletedCount)).catch(error => console.log(error))

});