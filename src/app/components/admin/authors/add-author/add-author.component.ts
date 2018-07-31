import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';  // Angular Forms

import { AuthorService } from '../../../../services/author.service';  // Services
import { Author } from '../../../../models/author'; // Model

import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  constructor(private authorService: AuthorService,
              private toastr: ToastrService) {}

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(addAuthorForm: NgForm){
    if (addAuthorForm.value.$key == null){  // If the Author doesnt have $key, its NEW, so we add it
     this.authorService.insertAuthor(addAuthorForm.value);
     this.toastr.success('Genial!', 'Autor Agregado');
    }
    else{ // Else we update the Author
    this.authorService.updateAuthor(addAuthorForm.value);
    this.toastr.info('Está Bien!', 'Autor Editado');
    }
    this.resetForm(addAuthorForm); // Reset the FORM in any case
  }

  resetForm(addAuthorForm?: NgForm){
    if (addAuthorForm != null) // Reset form if not empty and we add a empty Author
      addAuthorForm.reset();
      this.authorService.selectedAuthor = <Author>{}; // Instance a Empty Author Class
    }

}
