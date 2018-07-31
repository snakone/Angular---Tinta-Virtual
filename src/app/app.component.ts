import { Component } from '@angular/core';

import { MatIconRegistry } from "@angular/material/icon"; // Custom Icon
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer  // Add a custom Icon.svg
  ){
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/github.svg")
    );
  }
}
