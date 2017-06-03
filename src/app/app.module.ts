import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenyComponent } from './nav-bar/meny/meny.component';
import { RouterModule, Routes } from '@angular/router';
import 'gsap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent, WelcomeComponent, NavBarComponent, MenyComponent
  ],
  imports: [
    BrowserModule, routing, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
