import { Component, OnInit, Input } from '@angular/core';

import { AuthorService } from '../../../services/author.service'; // Service

import { Author } from '../../../models/author'; // Model
import { Book } from '../../../models/book'; // Model

import { ToastrService } from 'ngx-toastr'; // Toastr

@Component({
  selector: 'author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCardComponent implements OnInit {

  panelOpenState = false; // OnInit the Panel is Hidden

  authorList: Author[]; // Author List
  author: Author;  // Single Author
  urlPath: string;

  @Input() selectedBook : Book; // Input Actual Book from single-book Component

  constructor(private authorService: AuthorService,
              private toastr: ToastrService) {
                this.urlPath ="../../../../assets/image/authors/";
              }

  ngOnInit() {

    const selectedAuthor = this.selectedBook.author;

    this.authorService.getAuthors()  // Firebase List Authors
    .snapshotChanges()
    .subscribe(item => {
      this.authorList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.authorList.push(x as Author)
      })
      let filteredAuthor = this.authorList.filter(function(element){
      return element.name == selectedAuthor; // Author Name
      });
      this.author = filteredAuthor[0]; // We only get 1 result so it's always on 0 position
    })
  }

  addLike(author: Author){  // Add Like to Author
    this.authorService.addLike(author);
    this.toastr.success('Gracias!','Like recibido');
  }

}
