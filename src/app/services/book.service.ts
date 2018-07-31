import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'; // Firebase

import { Book } from '../models/book';  // Model

import { Subject } from 'rxjs'; // Subject

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookList: AngularFireList<any>;

  selectedBook: Book = <Book>{}; // Temporally save selected Book, to get the $key

  filteredData  = new Subject<any>();  // Filtered BookList

  constructor(private firebase: AngularFireDatabase) {}

  getBooks(){
    return this.bookList = this.firebase.list('books');  //FireBase List
  }

  setFilteredData(data) {
    this.filteredData.next(data);  // Subcribe to Filtered Data
  }

  insertBook(book: Book){ // Book Model
    this.bookList.push(
    new Book( book.title, book.author, book.gender, book.type,
              book.language, book.image, book.description, 0,  // New 0 likes
              book.price, book.stock, true ));
}

  updateBook(book: Book){
    this.bookList.update(book.$key,
      new Book( book.title, book.author, book.gender, book.type,
              book.language, book.image, book.description, book.likes, // Updates this.Likes
              book.price, book.stock, true ));
  }

  deleteBook($key: string){  // Delete Book by $Key
    this.bookList.remove($key);
  }

  addLike(book: Book){  // Add Like to Book
    this.bookList.update(book.$key,{
      likes: book.likes+1
    })
  }

}
