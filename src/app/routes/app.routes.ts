import { Routes, RouterModule } from '@angular/router';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppAboutComponent } from '../components/app-about/app-about.component';

import { AppWelcomeComponent } from '../components/app-welcome/app-welcome.component';

import { AdminBooksComponent } from '../components/admin/books/books.component';
import { AdminAuthorsComponent } from '../components/admin/authors/authors.component';
import { AdminCommentsComponent } from '../components/admin/comments/comments.component';

import { BooksGridComponent } from '../components/books-grid/books-grid.component';
import { SingleBookComponent } from '../components/single-book/single-book.component';
import { BooksTableComponent } from '../components/books-table/books-table.component';

import { BooksBasketComponent } from '../components/books-basket/books-basket.component';

import { AppBasketComponent } from '../components/app-basket/app-basket.component';


const app_Routes: Routes = [
  { path: 'home', component: AppWelcomeComponent },
  { path: 'about', component: AppAboutComponent },
  { path: 'admin/books', component: AdminBooksComponent }, // ADMIN Books
  { path: 'admin/authors', component: AdminAuthorsComponent }, // ADMIN Authors
  { path: 'admin/comments', component: AdminCommentsComponent }, // ADMIN Comments
  { path: 'books/list', component: BooksGridComponent }, // Book GRID
  { path: 'books/table', component: BooksTableComponent }, // Book TABLE
  { path: 'book/:$key', component: SingleBookComponent }, // Single Book by KEY
  { path: 'basket', component: BooksBasketComponent }, // Basket
  { path: 'basket/:basketID', component: AppBasketComponent }, // Basket with Key
  { path: '**', pathMatch: 'full', redirectTo: 'home' } // Default Route
];

@NgModule({
  imports: [RouterModule.forRoot(app_Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
