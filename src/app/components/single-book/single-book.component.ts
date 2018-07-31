import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'; // Routes
import { BookService } from '../../services/book.service'; // Service
import { Book } from '../../models/book'; // Model

import { BookBasket } from '../../models/book-basket'; // Model


@Component({
  selector: 'app-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  bookList: Book[];
  selectedBook: Book;
  bookBasket: BookBasket[];

  urlPath: string;

  constructor(private bookService : BookService,
              private router : Router,
              private activeRoute: ActivatedRoute) {
				  this.urlPath = "../../assets/image/books/";
			  }

  ngOnInit() {
     const routeParams = this.activeRoute.snapshot.params.$key; // Get the Key from URL
     this.getSelectedBook(routeParams); // Get the Book by Key
  }

  goBack(url: string){
    this.router.navigate([url]);
  }

  getSelectedBook($key){
    this.bookService.getBooks() // Get the Book INFO with the KEY
    .snapshotChanges()
    .subscribe(item => {
      this.bookList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();  // Convert List to JSON
        x["$key"] = element.key;
        this.bookList.push(x as Book)
      })
        let filteredBook = this.bookList.filter(function(element){ // Filter
        return element.$key == $key; // Book Key
        });
        this.selectedBook = filteredBook[0]; // We only get 1 result so it's always on 0 position
    })
  }

}
