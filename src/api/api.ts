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
    
        return true;
    
    }

    
}

