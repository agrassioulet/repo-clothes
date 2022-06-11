export interface IProduct {
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
    title!: string;
    description!: string;
    price!: number;
    stock!: number;
    brand!: string;
    category!: string;
    subcategory!: string;
    imageURL!: string;

}
