import { Component, OnInit, Input } from '@angular/core';

import { CommentService } from '../../../services/comment.service';  // Service

import { Comment } from '../../../models/comment'; // Model
import { Book } from '../../../models/book'; // model

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() selectedBook: Book;  // Input selectedBook from single-book Component

  commentList: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.showAll();
  }

  showAll(){ // Get All Book List
    const bookTitle = this.selectedBook.title;
    this.commentService.getComments()
    .snapshotChanges()
    .subscribe(item => {
      this.commentList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.commentList.push(x as Comment)
      })
      this.commentList = this.commentList.filter( function(element){   // Filter by Title
      return element.book == bookTitle;
      });
    })
  }
}
