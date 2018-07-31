import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'; // FireBase

import { Author } from '../models/author';  // Model


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  authorList: AngularFireList<any>;
  selectedAuthor: Author; // Temporally save selected Author to save it

  constructor(private firebase: AngularFireDatabase) {}

  getAuthors(){
    return this.authorList = this.firebase.list('authors'); // FireBase List
  }

  insertAuthor(author: Author){ // Author Model
    this.authorList.push(
    new Author( author.name, author.image, author.birth,
                author.country, author.bio, 0 )); // New 0 likes
}

  updateAuthor(author: Author){
    this.authorList.update(author.$key,
      new Author( author.name, author.image, author.birth,
                  author.country, author.bio, author.likes )); // Updates this.Likes
  }

  deleteAuthor($key: string){  // Delete Author
    this.authorList.remove($key);
  }

  addLike(author: Author){  // Add Like
    this.authorList.update(author.$key,{
      likes: author.likes+1
    })
  }

}
