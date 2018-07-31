import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'; // Firebase

import { Comment } from '../models/comment';  // Model

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  commentList: AngularFireList<any>;    // FireBase List
  selectedComment: Comment; // Temporally save selected Comment to save it

  constructor(private firebase: AngularFireDatabase) {}

  getComments(){
    return this.commentList = this.firebase.list('comments');  //FireBase List
  }

  insertComment(comment: Comment){ // Book Model
    this.commentList = this.firebase.list('comments');
    this.commentList.push(
    new Comment(comment.name,      // New Comment
                comment.book,
                comment.comment,
                0));
  }

  addLike(comment: Comment){  // Add Like to Comment
    this.commentList.update(comment.$key,{
      likes: comment.likes+1
    })
  }

  updateComment(comment: Comment){
    this.commentList.update(comment.$key,
      new Comment( comment.name, comment.book,
                   comment.comment,comment.likes )); // Updates this.Likes
  }

  deleteComment($key: string){  // Delete Comment by $Key
    this.commentList.remove($key);
  }

}
