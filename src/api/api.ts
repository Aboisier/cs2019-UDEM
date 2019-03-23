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

        var mail: string = req.body.email;
        var pass: string = req.body.password;
        var fullNameX: string = req.body.fullName;

        if ( mail != undefined && pass != undefined && fullNameX != undefined ) {
            rep.sendStatus(400)
        }
        
        else if ( this.accountExist( mail) ){
            rep.sendStatus(500);
        }
        else {
            Database.insert('users',{email:mail,password:pass,fullName:fullNameX})
            rep.sendStatus(201);
        }
    }

    private accountExist( emailUser: string){
        
        var isThere = false;
        
        Database.getQueryResult( function (err, client) {
            if (err){
                throw err
            }
            
            
            client.db.collection('users').find({email:emailUser}).toArray(function (err, result) {
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

    // we have to verify if the account is in the database and if so compare his pswd
    // with the pswd from the database
    private authenticate(emailUser,passUser){
        var correspondance;
        Database.getQueryResult( function (err, client) {
            if (err){
                throw err
            }
            correspondance =  client.db.collection('users').find({email:emailUser,password:passUser}).count()!=0;
        });

        if(correspondance){
            return true;
        }
        else{
            return false;
        }
    }    
}

