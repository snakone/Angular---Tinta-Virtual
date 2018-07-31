import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';  // Angular Forms

import { CommentService } from '../../../../services/comment.service';  // Services
import { Comment } from '../../../../models/comment'; // Model

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'admin-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AdminAddCommentComponent implements OnInit {

  commentList: Comment[];

  constructor(private commentService: CommentService,
              private toastr: ToastrService) {}

  ngOnInit() {
    this.resetForm();
    this.getComments();
  }

  onSubmit(addCommentForm: NgForm){
    if (addCommentForm.value.$key == null){  // If the Comment doesnt have $key, its NEW, so we add it
     this.commentService.insertComment(addCommentForm.value);
     this.toastr.success('Genial!', 'Comentario Agregado');
    }
    else{ // Else we update the Comment
    this.commentService.updateComment(addCommentForm.value);
    this.toastr.info('Está Bien!', 'Comentario Editado');
    }
    this.resetForm(addCommentForm); // Reset the FORM in any case
  }

  resetForm(addCommentForm?: NgForm){
    if (addCommentForm != null) // Reset form if not empty and we add a empty Comment
      addCommentForm.reset();
      this.commentService.selectedComment = <Comment>{}; // Instance a Empty Comment Class
    }


    getComments(){
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

}
