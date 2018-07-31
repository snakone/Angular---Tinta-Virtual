import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../services/book.service';
import { Book } from '../../../../models/book';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList: Book[];

  constructor(private bookService: BookService,
              private toastr: ToastrService) { }

  ngOnInit() {
    
    this.bookService.getBooks() // Get all Book List
    .snapshotChanges()
    .subscribe(item => {
      this.bookList = []; // We start with an empty LIST then adding Books forEach to JSON
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.bookList.push(x as Book)
      })
    })
  }

  onEdit(book: Book){
    this.bookService.selectedBook = Object.assign({},book); // Avoid Two Data Binding
  }

  onDelete($key: string){ // Delete Book by KEY
    if (confirm('Estás seguro que quieres eliminar este libro?')){
      this.bookService.deleteBook($key);
      this.toastr.error('Vaya :(','Libro Eliminado');
    }
  }

}
