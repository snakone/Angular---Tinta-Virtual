import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-title',
  templateUrl: './top-title.component.html',
  styleUrls: ['./top-title.component.css']
})
export class TopTitleComponent implements OnInit {

  gridTitle: string;
  gridsubTitle: string;

  constructor() {

    this.gridTitle = "Tinta Virtual";
    this.gridsubTitle = "Libros digitales y de siempre";
  }

  ngOnInit() {
  }

}
