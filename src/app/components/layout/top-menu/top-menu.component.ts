import { Component, OnInit } from '@angular/core';

import { BookService } from '../../../services/book.service'; 

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

}
