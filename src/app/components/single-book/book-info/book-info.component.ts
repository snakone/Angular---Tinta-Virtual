import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../../../models/book';

@Component({
  selector: 'book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  @Input() selectedBook: Book;  // Input selectedBook from single-book Component

  constructor() { }

  ngOnInit() {
  }

}
