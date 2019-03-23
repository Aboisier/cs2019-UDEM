export class Account {


    userId: String;
    email: String;
    passwordHash: String;
    passordSalt: String;
    fullName:String;
    
    constructor(
        public userId: string,
        public email: string,
        public passwordHash: string,
        public passwordSalt: string,
        public fullName: string
    ) {
        this.userId = user;
        this.email = email;
        this.passwordHash = passwordHash;
        this.passwordSalt = passwordSalt;
        this.fullName = fullName;
    }
    
}
