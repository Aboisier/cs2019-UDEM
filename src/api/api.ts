import { Router } from 'express';
import { sign } from 'jsonwebtoken';
import { Database } from './Database';

export class Api {
    
    public getRouter(): Router {
        
        const router = Router();
        // TODO: You probably want to register your routes here.
        router.post('/auth/createAccount', this.createAccount);
        router.post('/api/auth/authenticate', this.authenticate);
                    
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
    
        var isThere = false;
        
        Database.getQueryResult( function (err, client) {
            if (err){
                throw err
            }
        
            
            client.db.collection('usernames').find().toArray(function (err, result) {
                if (err){
                    throw err;
                }
                else if( result.count() != 0 ){
                    isThere=true;
                }
            })
            
        });

        if(isThere){
            return true;
        }
        
        return false; //TODO
        
    }

    private authenticate(){
        //res.json(json
    }
    
    
}
    
