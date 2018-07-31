import { Component, OnInit, Input } from '@angular/core';

import { CommentService } from '../../../services/comment.service';  // Service

import { Book } from '../../../models/book';   // Models
import { Comment } from '../../../models/comment';

import { ToastrService } from 'ngx-toastr'; // Toastr

import { NgForm } from '@angular/forms';  // Angular Forms

@Component({
  selector: 'add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @Input() selectedBook: Book;
  bookComment: Comment = <Comment>{}; // Temporally save a Comment

  constructor(private commentService: CommentService,
              private toastr: ToastrService) {}

  addComment(addCommentForm: NgForm){

    if (addCommentForm.value.comment == null || addCommentForm.value.name == null)
      alert("Rellena el formulario!")
    else {
      this.commentService.insertComment(addCommentForm.value);
      this.toastr.success('Gracias!','Comentario recibido');

      this.bookComment = <Comment>{}; // Instance a Empty Author Class
    }
  }

  ngOnInit() {

  }

}
