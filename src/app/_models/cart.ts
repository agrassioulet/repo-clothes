import { User } from "./user";

export interface ICart {
    _id: string;
    id_user: User;
    active: boolean;
    order_date: Date;
    status: String,
    client_ref: String,
}


export class Cart {


    static format (inputDate: Date) {
        let date, month, year;
    
        date = inputDate.getDate();
        month = inputDate.getMonth() + 1;
        year = inputDate.getFullYear();
    
        date = date
            .toString()
            .padStart(2, '0');
    
        month = month
            .toString()
            .padStart(2, '0');
    
        return `${date}/${month}/${year}`;
    }

}
