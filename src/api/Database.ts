import {MongoClient} from 'mongodb';
//var MongoClient = require('mongodb').MongoClient


export class Database {

    private static database : Database = new Database();

    public static getQueryResult(callback){
        MongoClient.connect( process.env.MONGODB_URI , function (err, client) {
            
            callback(err,client);
            
            client.close();
            
        });
    }   
}
