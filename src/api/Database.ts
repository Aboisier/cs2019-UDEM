import {MongoClient} from 'mongodb';
//var MongoClient = require('mongodb').MongoClient


export class Database {

    private static database : Database = new Database();

    public static getQueryResult(callback){
        Database.connect( function (err, client) {
            
            callback(err,client);
            
            client.close();
            
        });
    }

    public static insert(collectionName,insertSubject){
        
        Database.connect( function(err, client) {
            // Get the collection
            var col = client.db.collection(collectionName);
            col.insertOne(insertSubject);
            client.close();
        });
    }

    private static connect(callback){
        MongoClient.connect( process.env.MONGODB_URI ,callback);

    }
}
