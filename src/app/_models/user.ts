export class User implements IUser {
    public firstname!: string;
    public lastname!: string;
    public dateOfBirth!: string;

    public postalCode!: string;
    public city!: string;
    public adress!: string;

    public email!: string;

    public login!: string;
    public password!: string;

    constructor() { }

    getFullAdress() : string {
        return this.adress + ' ' + this.postalCode + ' ' + this.city
    }

}

export interface IUser {
    firstname: string;
    lastname: string;
    dateOfBirth: string;

    postalCode: string;
    city: string;
    adress: string;

    email: string;

    login: string;
    password: string;


}