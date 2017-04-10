import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { JumbotronComponent }  from './components/jumbotron/jumbotron.component';
import { AboutComponent }  from './components/pages/about.component';
import { HomeComponent }  from './components/pages/home.component';
import { ContactComponent }  from './components/pages/contact.component';
import { MoviesComponent }  from './components/pages/movies.component';
import { FooterComponent }  from './components/footer/footer.component';
import { SidebarComponent }  from './components/sidebar/sidebar.component';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing],
  declarations: [ AppComponent, NavbarComponent, JumbotronComponent, AboutComponent, HomeComponent, ContactComponent, MoviesComponent, FooterComponent, SidebarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
