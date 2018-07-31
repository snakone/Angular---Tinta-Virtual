import { Component, OnInit } from '@angular/core';

import { BasketService } from '../../services/basket.service'; // Services

import { Router } from '@angular/router'; // Routes
import { ToastrService } from 'ngx-toastr';

import { BookBasket } from '../../models/book-basket'; // Models
import { Basket } from '../../models/basket';

@Component({
  selector: 'books-basket',
  templateUrl: './books-basket.component.html',
  styleUrls: ['./books-basket.component.css']
})
export class BooksBasketComponent implements OnInit {

  booksOnBasket: BookBasket[];  // Actual Books on Basket
  basket: Basket;  // Full Basket
  totalPrice: number;

  urlPath: string; // Image Path

  constructor(private basketService: BasketService,
              private router: Router,
              private toastr: ToastrService) {

  this.urlPath ="../../../assets/image/books/"; }

  ngOnInit() {

    this.booksOnBasket = Object.values(this.basketService.actualBasket); // Observer to Object

    this.calcPrice();  // Total Price Calculations
  }

 onDelete(book: BookBasket){

  let filteredBasket = this.booksOnBasket.filter( function(element){   // Filter by Book ID
  return element.id != book.id;
  });

  this.basketService.setbasket(filteredBasket); // Subscribe to this Basket
  this.booksOnBasket = this.basketService.actualBasket;

  this.calcPrice();  // Total Price Calculations
}

calcPrice(){

  let Price = 0;  // Total Price Calculations

  const sumPrice = this.booksOnBasket  // Get all SubTotals
  .map( y => {
      return  y.subTotal = Math.round(y.subTotal * 100) / 100;  // 2 Decimal
    })
  sumPrice.forEach( x => {  // Plus all SubTotals
     Price += x;
  })
  this.totalPrice = Price;
  this.totalPrice = Math.round(this.totalPrice * 100) / 100;  // 2 Decimal
}


  purchaseBasket(){
    // We finish by adding a new Full Basket
    this.basket = new Basket(Math.round(Math.random() * 100000),this.booksOnBasket,this.totalPrice);

    this.basketService.insertFullBasket(this.basket);
    this.toastr.success('Comprado!', 'Muchas Gracias!');
    let url = "basket/"+this.basket.basketID;
    console.log(url);

    this.router.navigate([url]);
  }

  goBack(url: string){
    this.router.navigate([url]);
  }

}
