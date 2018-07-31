import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../../../../services/book.service';

import { ToastrService } from 'ngx-toastr';

import { Book } from '../../../../models/book';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService: BookService,
              private toastr: ToastrService) {}

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(addBookForm: NgForm){
    if (addBookForm.value.$key == null){  // If the Book doesnt have $key, its NEW, so we add it
     this.bookService.insertBook(addBookForm.value);
     this.toastr.success('Genial!', 'Libro Agregado');
    }
    else{ // Else we update the book
    this.bookService.updateBook(addBookForm.value);
    this.toastr.info('Está Bien!', 'Libro Editado');
    }
    this.resetForm(addBookForm); // Reset the FORM in any case
  }

  resetForm(addBookForm?: NgForm){
    if (addBookForm != null) // Reset form if not empty and we add a empty Book
      addBookForm.reset();
      this.bookService.selectedBook = <Book>{}; // Instance a Empty Book Class
}

}
