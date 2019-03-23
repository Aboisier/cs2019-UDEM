import {MongoClient} from 'mongodb';
//var MongoClient = require('mongodb').MongoClient


export class Database {

    private static database : Database = new Database();
    /**
       connects to the database and execute the callback function with error and client as parameter. It then closes the db 
**/
    public static getQueryResult(callback){
        Database.connect( function (err, client) {
            
            callback(err,client);
            
            client.close();
            
        });
    }
    /**
       Takes the name of a collection of the database to wich we connect  and insert in it the object in format {key:value,...} and then close connection to the database
 **/
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
