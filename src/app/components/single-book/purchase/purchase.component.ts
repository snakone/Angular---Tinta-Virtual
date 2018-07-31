import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../../../models/book';  // Models
import { BookBasket } from '../../../models/book-basket';
import { Basket } from '../../../models/basket';

import { BasketService } from '../../../services/basket.service';  // Service

import { ToastrService } from 'ngx-toastr'; // Toastr

import { NgForm } from '@angular/forms';  // Angular Forms

@Component({
  selector: 'purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  @Input() selectedBook: Book; // INPUT selectedBook from single-book Component

  bookBasket: BookBasket;  // Individual Book on a Basket
  basket: BookBasket[];  // Full List of Books on a Basket
  quantity: number;  // Quantity of Book on the purchase
  subTotal: number;

  constructor(private basketService: BasketService,
              private toastr: ToastrService) {
    this.bookBasket = <BookBasket>{};  // Instance a empty Book Basket
    this.bookBasket.quantity = 1;   // We start with 1 Book by default
}

  ngOnInit() {

if (!this.basketService.actualBasket) {
      this.basket=[];  // If We dont have Actual Basket then we create it
    }
else {
      // If not, We take the actualBasket from the Service
      this.basket = Object.values(this.basketService.actualBasket); // Observer to Object
    }
  }

  addBooktoBasket(purchasebookForm: NgForm){

    this.quantity = purchasebookForm.value.quantity;  // Quantity of Books
    this.subTotal = this.selectedBook.price * this.quantity;

    if (this.selectedBook.stock < purchasebookForm.value.quantity) // Stock check
    {
    alert('No puedes comprar más libros de los que hay en Stock');
    this.bookBasket.quantity = 1;
      }
    else { // We start here
    var exist = false;  // We need to know if the purchased Book its on the Basket already
    var index = 0;  // If exist We need to know the index
    if (this.basket.length != 0) {
              for (var x=0; x< this.basket.length; x++) { // Iterate the Basket looking for same Book
                if (this.basket[x].title == this.selectedBook.title) { // Compare
                  exist = true;
                  index = x;  // Set Values
                }
              } // end of FOR
                if (exist) {  // CASE 1: BOOK ALREADY EXIST ON BASKET
                // If exist, update the quantity and subTotal
                  this.basket[index].quantity += purchasebookForm.value.quantity;
                  this.basket[index].subTotal = this.basket[index].quantity * this.basket[index].price;

                                    } // If doesnt exist we insert into the actual Basket

                                      else this.insertBooktoBasket();  // CASE 2: BOOK ISNT ON BASKET

  // If the basket doesnt exist we insert it into the instanced one

} else  this.insertBooktoBasket(); // CASE 3: BASKET DOESNT EXIST

// End of Purchase

    this.basketService.setbasket(this.basket); // Subscribe to this Basket
    this.bookBasket.quantity = 1;   // After purchase Book Quantity back to 1
    this.toastr.info('Genial!', 'Libro añadido')
    } // End of Stock Else
  }

  insertBooktoBasket(){
    let bookId = Math.round(Math.random() * 100000) ;
    this.basket
    .push(new BookBasket(
      bookId,  // After We know all Book properties...Make a NEW Book on a Basket
      this.selectedBook.title,
      this.selectedBook.image,
      this.selectedBook.price,
      this.quantity, this.subTotal));
    
  }

}
