import { Component, OnInit, OnDestroy } from '@angular/core';

import { BookService } from '../../services/book.service'; // Services
import { Book } from '../../models/book'; // Models

import { ISubscription } from 'rxjs/Subscription'; // Unsubscribe

@Component({
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css']
})

export class BooksGridComponent implements OnInit  {

  bookList: Book[];
  subscription: ISubscription; // Subscription
  emptyList: boolean; // Value to know if BookList is empty
  pagination: boolean = false; // Value to know whenever do Pagination or NOT

  p: number = 1; // ngxPagination
  urlPath: string; // URL for images

  constructor(private bookService: BookService) {

    this.urlPath = "../../../assets/image/books/";
}

  ngOnInit() {
      this.subscription = this.bookService.filteredData
      .subscribe((data)=>{ // Subscribe to Events
          this.bookList= data; // Subsbribed item = bookList
          this.letsCheck();
        })
      this.showAll();
   }

  showAll(){ // Get All Book List
    this.bookService.getBooks()
    .snapshotChanges()
    .subscribe(item => {
      this.bookList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();  // Convert List to JSON
        x["$key"] = element.key;
        this.bookList.push(x as Book)
      })
      this.letsCheck();
    })
  }

  letsCheck(){
    this.bookList.length == 0 ? // Subscribe to know if List is EMPTY
    this.emptyList = true : this.emptyList = false;

    this.bookList.length >= 13 ?  // Subscribe to know if Pagination should DISPLAY
    this.pagination = true : this.pagination = false;
  }

  ngOnDestroy() {
  this.subscription.unsubscribe(); // Destroy the Subscription
  }

}
