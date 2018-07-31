import { Injectable } from '@angular/core';

import { BookBasket } from '../models/book-basket';  // Model

import { Basket } from '../models/basket';  // Model

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'; // Firebase

import { Subject } from 'rxjs'; // Subject

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket  = new Subject<any>();  // Subscription to Basket
  actualBasket: BookBasket[] = []; // Temporally save actualBasket
  basketList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  insertFullBasket(basket: Basket){ // Basket Model
    this.basketList = this.firebase.list('baskets');  //FireBase List
    this.basketList.push(basket);
}

getBaskets(){
  return this.basketList = this.firebase.list('baskets');  //FireBase List
}

  setbasket(basket) {
    this.basket.next(basket); // Subcribe to Basket
    this.actualBasket = basket // any change = actualBasket
  }

}
