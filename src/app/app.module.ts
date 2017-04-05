import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { JumbotronComponent }  from './components/jumbotron/jumbotron.component';
import { AboutComponent }  from './components/pages/about.component';
import { HomeComponent }  from './components/pages/home.component';
import { ContactComponent }  from './components/pages/contact.component';
import { MoviesComponent }  from './components/pages/movies.component';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, JsonpModule ],
  declarations: [ AppComponent, NavbarComponent, JumbotronComponent, AboutComponent, HomeComponent, ContactComponent, MoviesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }