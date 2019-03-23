export class Account {
    
    constructor(
        public userId: string,
        public email: string,
        public passwordHash: string,
        public passwordSalt: string,
        public fullName: string
    ) {
        this.userId = userId;
        this.email = email;
        this.passwordHash = passwordHash;
        this.passwordSalt = passwordSalt;
        this.fullName = fullName;
    }
    
}
