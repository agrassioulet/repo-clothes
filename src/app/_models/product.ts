export interface IProduct {
    _id: string;
    title: string;
    description: string;
    price: number;
    stock: number;
    brand: string;
    category: string;
    subcategory: string;
    imageURL: string;
}

export class Product implements IProduct {
    _id!: string;
    title!: string;
    description!: string;
    price!: number;
    stock!: number;
    brand!: string;
    category!: string;
    subcategory!: string;
    imageURL!: string;

}
