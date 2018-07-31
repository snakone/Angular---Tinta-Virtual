import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[scrolling]' // Name the Directive to 'scrolling'
})

export class scrollfixedNav {

  constructor(element: ElementRef){
  }

@HostBinding('class.blue') isBlue = true;  // Bind Element Property to a @Diretive

@Input() set scrolling(value){ // Set the Property ^ into the Directive
  this.isBlue = value;
}

@HostListener('window:scroll') do(){  // Listen for Events

  var fixedNav = document.getElementById("fixed").style;
  var docTop = document.documentElement.scrollTop;

  if (docTop >= 80){  // Fixed NAV Scroll Behaviour
    fixedNav.transition = "all 1s";
    fixedNav.top = "60px";
    }
  else {
    fixedNav.transition = "all .2s";
    fixedNav.top = "180px";
        }
  }

ngOnInit() {
  // We do it OnInit and when Window Scroll

  var fixedNav = document.getElementById("fixed").style;
  var docTop = document.documentElement.scrollTop;

  if (docTop >= 80){  // Fixed NAV Scroll Behaviour
      fixedNav.transition = "all 1s";
      fixedNav.top = "60px";
        }
  else {
      fixedNav.transition = "all .2s";
      fixedNav.top = "200px";
      }
    }
}

// Make custom directive support input values from the directive property that matches
// the directive selector on the host element
// Lynda Course xD
