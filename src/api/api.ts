import { Router } from 'express';

export class Api {
    
    public getRouter(): Router {
        const router = Router();
        // TODO: You probably want to register your routes here.
        router.post('/auth/createAccount', createAccount)

        return router;
    }

    // fonction qui cree l'account a partir des elements envoyes par l'utilisateur
    private function createAccount(req,rep){

        var email: string = req.body.email;
        var password: string = req.body.password;
        var fullName: string = req.body.fullName;

        if ( email != undefined && password != undefined && fullName != undefined ) {
            rep.sendStatus(400)
        }
        //TODO faire la fonction accountExist
        else if ( accountExist(email) ){
            rep.sendStatus(500);
        }
        else {
            rep.sendStatus(201);
        }
    }

    private function accountExist(String email){

        
    }
}

