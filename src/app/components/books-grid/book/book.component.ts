import { Component, OnInit, Input } from '@angular/core';

import { BookService } from '../../../services/book.service'; // Services
import { Book } from '../../../models/book'; // Models
import { Router } from '@angular/router'; // Router
import { ToastrService } from 'ngx-toastr'; // Toastr

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  urlPath: string; // URL of images

  bookList: Book[];

  @Input() book: Book; // We use INPUT to insert book from books-grid into book.component

    constructor(private bookService: BookService,
                private router: Router,
                private toastr: ToastrService) {
    this.urlPath = "../../../../assets/image/books/";
  }

  ngOnInit() {}

   showBook($key: string){  // Show INFO of the Book by Key
     this.router.navigate(['/book', $key]);
   }

  addLike(book: Book){  // Add LIKE to a Book
    this.bookService.addLike(book);
    this.toastr.success('Gracias!','Like recibido');
  }

}
