import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `  <nav-bar></nav-bar>
  <h1>
  &nbsp; 
  </h1>
  <nav-meny></nav-meny>
  
 <router-outlet class="fad"></router-outlet>
  `,

  styleUrls: ['./app.component.css',  '../styles.scss'],



})
export class AppComponent {
  title = 'app';
}
