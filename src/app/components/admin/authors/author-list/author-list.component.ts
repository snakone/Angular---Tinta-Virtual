import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../../../../services/author.service';  // Service
import { Author } from '../../../../models/author';  // Model

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authorList: Author[];

  constructor(private authorService: AuthorService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.authorService.getAuthors() // Get all Author List
    .snapshotChanges()
    .subscribe(item => {
      this.authorList = []; // We start with an empty LIST then adding Authors forEach to JSON
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.authorList.push(x as Author)
      })
    })
  }

  onEdit(author: Author){
    this.authorService.selectedAuthor = Object.assign({},author); // Avoid Two Data Binding
  }

  onDelete($key: string){ // Delete Author by KEY
    if (confirm('Estás seguro que quieres eliminar este autor?')){
      this.authorService.deleteAuthor($key);
      this.toastr.error('Vaya :(','Libro Eliminado');
    }
  }

}
