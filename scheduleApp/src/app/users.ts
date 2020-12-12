export class User {
    Username: string;
    Email: string;
    isAdmin: string;
    activeUser: string;


    constructor( Username: string, Email: string, isAdmin: string, activeUser: string)
    {
        this.Username = Username;
        this.Email = Email;
        this.isAdmin = isAdmin;
        this.activeUser = activeUser;

    }
  }