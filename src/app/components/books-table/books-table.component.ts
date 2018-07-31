import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css']
})
export class BooksTableComponent implements OnInit {

  bookList: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() { // Get All Books
    this.bookService.getBooks()
    .snapshotChanges()
    .subscribe(item => {
      this.bookList = [];
      item.forEach(element => {
        let x = element.payload.toJSON(); // Converti List to JSON
        x["$key"] = element.key;
        this.bookList.push(x as Book)
      })
    })
  }

}
