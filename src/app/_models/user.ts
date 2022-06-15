export class User implements IUser {

    public firstname!: string;
    public lastname!: string;
    public dateOfBirth!: Date;

    public postalCode!: string;
    public city!: string;
    public adress!: string;

    public email!: string;

    public login!: string;
    public password!: string;

    constructor() { }

    public static initUser() {
        return {
            firstname: '',
            lastname: '',
            dateOfBirth: new Date(),
            postalCode: '',
            city: '',
            adress: '',
            email: '',
            login: '',
            password: ''
        }
    }

}

export interface IUser {
    firstname: string;
    lastname: string;
    dateOfBirth: Date;

    postalCode: string;
    city: string;
    adress: string;

    email: string;

    login: string;
    password: string;


}