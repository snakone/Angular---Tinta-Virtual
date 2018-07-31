import { Basket } from './basket';

export class User {

userID: string;
userName: string;
userEmail: string;
userBasket: Basket;

  constructor(id: string, name: string, email: string, basket: Basket){
    this.userID = id;
    this.userName = name;
    this.userEmail = email;
    this.userBasket = basket;
  }
}
