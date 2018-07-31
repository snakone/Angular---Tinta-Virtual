import { Component, OnInit } from '@angular/core';

import { CommentService } from '../../../../services/comment.service';  // Service
import { Comment } from '../../../../models/comment';  // Model

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  commentList: Comment[];

  constructor(private commentService: CommentService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.commentService.getComments() // Get all Comment List
    .snapshotChanges()
    .subscribe(item => {
      this.commentList = []; // We start with an empty LIST then adding Comments forEach to JSON
      item.forEach(element => {
        let x = element.payload.toJSON();  // List to JSON
        x["$key"] = element.key;
        this.commentList.push(x as Comment)
      })
    })
  }

  onEdit(comment: Comment){
    this.commentService.selectedComment = Object.assign({},comment); // Avoid Two Data Binding
  }

  onDelete($key: string){ // Delete Comment by KEY
    if (confirm('Estás seguro que quieres eliminar este comentario?')){
      this.commentService.deleteComment($key);
      this.toastr.error('Vaya :(','Comentario Eliminado');
    }
  }

}
