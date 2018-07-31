import { BookBasket } from './book-basket';

export class Basket {

basketID: number;
basketBooks: BookBasket[]; // Array of Books in a Basket
totalPrice:number;

  constructor(id: number, basket: BookBasket[], price: number){
    this.basketID = id;
    this.basketBooks = basket;
    this.totalPrice = price;
  }
}
