import { Component, OnInit } from '@angular/core';

import { BookService } from '../../../services/book.service';  // Service
import { Book } from '../../../models/book';  // Model

import { scrollfixedNav } from './scroll.directive';  // Custom Directive

@Component({
  selector: 'fixed-nav',
  templateUrl: './fixed-nav.component.html',
  styleUrls: ['./fixed-nav.component.css']
})
export class FixedNavComponent implements OnInit {

  navTitles: string[];

  Genders: string[];
  Novels: string[];
  Formats: string[];
  Languages: string[];

  bookList: Book[];

  constructor(private bookService: BookService) {

    this.navTitles = ["Libros","Novelas","Formato","Idioma"];

    this.Genders = ["Literatura", "Infantil", "Juvenil","Poesía","Narrativa"];
    this.Novels = ["Aventuras", "Acción", "Romántica", "Negra", "Sci-Fi"]
    this.Formats = ["Tapa", "Digital", "Cómic"];
    this.Languages = ["Español", "Catalán", "Inglés"];
  }

  filterByGender(gender: string){

    this.bookService.getBooks()  // Get Firebase List
    .snapshotChanges()
    .subscribe(item => {
      this.bookList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();  // FireList to JSON
        x["$key"] = element.key;
        this.bookList.push(x as Book)
      })
        let filteredData = this.bookList.filter( function(element){   // Filter by Gender
        return element.gender == gender;
        });
         this.bookService.setFilteredData(filteredData); // Set Filtered Data to Subscription
    })
  }

  filterByLanguage(language: string){

    this.bookService.getBooks()  // Get Firebase List
    .snapshotChanges()
    .subscribe(item => {
      this.bookList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();  // FireList to JSON
        x["$key"] = element.key;
        this.bookList.push(x as Book)
      })
        let filteredData = this.bookList.filter( function(element){  // Filter by Language
        return element.language == language;
        });
         this.bookService.setFilteredData(filteredData); // Set Filtered Data to Subscription
    })
  }


  filterByType(type: string){

    this.bookService.getBooks()  // Get Firebase List
    .snapshotChanges()
    .subscribe(item => {
      this.bookList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();  // FireList to JSON
        x["$key"] = element.key;
        this.bookList.push(x as Book)
      })
        let filteredData = this.bookList.filter( function(element){  // Filter by Type
        return element.type == type;
        });
         this.bookService.setFilteredData(filteredData); // Set Filtered Data to Subscription
    })
  }

  ngOnInit() {
  }

}
