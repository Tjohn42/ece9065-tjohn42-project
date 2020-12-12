export class User {
    Username: string;
    Email: string;
    isAdmin: string;


    constructor( Username: string, Email: string, isAdmin: string)
    {
        this.Username = Username;
        this.Email = Email;
        this.isAdmin = isAdmin;

    }
  }