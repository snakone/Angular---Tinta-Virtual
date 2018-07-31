import { Component, OnInit, Input } from '@angular/core';

import { CommentService } from '../../../../services/comment.service';  // Service

import { Comment } from '../../../../models/comment'; // Model
import { Book } from '../../../../models/book'; // Model

import { ToastrService } from 'ngx-toastr'; // Toastr

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment; // Input comments from comments Component
  @Input() selectedBook: Book;  // Input selectedBook from single-book Component

  constructor(private commentService: CommentService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  addLike(comment: Comment){
    this.commentService.addLike(comment);
    this.toastr.success('Gracias!','Like recibido');
  }

  onDelete(comment: Comment) {
    if (confirm('Estás seguro que quieres eliminar este comentario?')){
      this.commentService.deleteComment(comment.$key);
      this.toastr.error('Vaya :(','Comentario Eliminado');
    }
  }

}
