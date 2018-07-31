import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'; // Routes
import { BasketService } from '../../services/basket.service'; // Service
import { Basket } from '../../models/basket'; // Model

import { BookBasket } from '../../models/book-basket'; // Model



@Component({
  selector: 'app-basket',
  templateUrl: './app-basket.component.html',
  styleUrls: ['./app-basket.component.css']
})
export class AppBasketComponent implements OnInit {

  basketList: Basket[];
  bookBasket: BookBasket[]=[];
  selectedBasket: Basket;
  urlPath: string;

  constructor(private basketService : BasketService,
              private router : Router,
              private activeRoute: ActivatedRoute) {

              this.urlPath="../../../assets/image/books/"}

  ngOnInit() {
     const routeParams = this.activeRoute.snapshot.params.basketID; // Get the Key from URL
     this.getSelectedBasket(routeParams); // Get the Basket by Key
  }

  goBack(url: string){
    this.router.navigate([url]);
  }

  getSelectedBasket($key){
    this.basketService.getBaskets() // Get the Book INFO with the KEY
    .snapshotChanges()
    .subscribe(item => {
      this.basketList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();  // Convert List to JSON
        this.basketList.push(x as Basket)
      })

        let filteredBasket = this.basketList.filter(function(element){ // Filter
        return element.basketID == $key; // Book Key
        });
        this.selectedBasket = filteredBasket[0]; // We only get 1 result so it's always on 0 position
        this.bookBasket = Object.values(this.selectedBasket.basketBooks);
        console.log(this.bookBasket);
    })
  }

}
