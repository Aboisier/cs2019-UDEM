import { Router } from 'express';

export class Api {
    
    public getRouter(): Router {
        const router = Router();
        // TODO: You probably want to register your routes here.
        router.post('/auth/createAccount', this.createAccount);

        return router;
    }

    // cree l'account a partir des elements envoyes par l'utilisateur
    private createAccount(req,rep){

        var email: string = req.body.email;
        var password: string = req.body.password;
        var fullName: string = req.body.fullName;

        if ( email != undefined && password != undefined && fullName != undefined ) {
            rep.sendStatus(400)
        }
        //TODO faire la fonction accountExist
        else if ( this.accountExist(email) ){
            rep.sendStatus(500);
        }
        else {
            rep.sendStatus(201);
        }
    }

    private accountExist( email: string){
    
        var MongoClient = require('mongodb').MongoClient
        var isThere = false;
        
        MongoClient.connect( process.env.MONGODB_URI , function (err, db) {
            if (err){
                throw err
            }
        
            
            db.collection('usernames').find().toArray(function (err, result) {
                if (err){
                    throw err;
                }
                else if( result.count() != 0 ){
                    isThere=true;
                }
            })
            
        })

        if(isThere){
            return true;
        }

        return false; //TODO
        
    }
    
    
}

