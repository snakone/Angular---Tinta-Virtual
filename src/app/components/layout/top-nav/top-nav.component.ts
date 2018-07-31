import { Component, OnInit } from '@angular/core';

import { BasketService } from '../../../services/basket.service';


@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

  appTitle: string;
  ngVersion: string;  // Angular Version
  githubLink: string;
  appMail: string;  // Personal Mail
  matBadge: number;  // Actual Nº of BookBasket

  constructor(private basketService: BasketService) {

    this.appTitle = "Tinta Virtual";
    this.ngVersion = "Angular 6";
    this.githubLink = "https://github.com/snakone/Angular-6-Material-Design-Pink-Theme";
    this.appMail = "mailto:sergio.martinez87.web@gmail.com?Subject=Angular%20Material";
  }

  ngOnInit() {
    this.basketService.basket.subscribe((basket)=>{
        this.matBadge = basket.length; // Subscribe to know Basket Length = Actual Nº of BookBasket
      })
    }

}
