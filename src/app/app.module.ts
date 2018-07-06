import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import {BooksService} from "./books.service";
import { ListBooksComponent } from './list-books/list-books.component';
import { MenuComponent } from './menu/menu.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  { path: "", component: AppComponent},
  { path: 'Books', component: ListBooksComponent },
  { path: 'Authors', component: AuthorsComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AuthorsComponent,
    ListBooksComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
