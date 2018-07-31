import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

// Animations

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Services

import { BookService } from './services/book.service';
import { AuthorService } from './services/author.service';
import { BasketService } from './services/basket.service';
import { CommentService } from './services/comment.service';

// Firebase

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// Material Module

import { MaterialModule } from './modules/material';
import { NgxPaginationModule } from 'ngx-pagination';

// FormsModule

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routes

import { AppRoutingModule } from './routes/app.routes';

// Toastr

import { ToastrModule } from 'ngx-toastr';

// App Layout

import { TopNavComponent } from './components/layout/top-nav/top-nav.component';
import { TopMenuComponent } from './components/layout/top-menu/top-menu.component';
import { TopTitleComponent } from './components/layout/top-title/top-title.component';
import { AppGridComponent } from './components/layout/app-grid/app-grid.component';
import { FixedNavComponent } from './components/layout/fixed-nav/fixed-nav.component';
import { FooterNavComponent } from './components/layout/footer-nav/footer-nav.component';
import { FooterMenuComponent } from './components/layout/footer-menu/footer-menu.component';
import { scrollfixedNav } from './components/layout/fixed-nav/scroll.directive';

// Components //

// Admin

import { AdminBooksComponent } from './components/admin/books/books.component';
import { AdminAuthorsComponent } from './components/admin/authors/authors.component';
import { AdminCommentsComponent } from './components/admin/comments/comments.component';
import { BookListComponent } from './components/admin/books/book-list/book-list.component';
import { AuthorListComponent } from './components/admin/authors/author-list/author-list.component';
import { CommentListComponent } from './components/admin/comments/comment-list/comment-list.component';
import { AddBookComponent } from './components/admin/books/add-book/add-book.component';
import { AddAuthorComponent } from './components/admin/authors/add-author/add-author.component';
import { AdminAddCommentComponent } from './components/admin/comments/add-comment/add-comment.component';

// Books

// Single Book

import { SingleBookComponent } from './components/single-book/single-book.component';
import { BookInfoComponent } from './components/single-book/book-info/book-info.component';
import { AuthorCardComponent } from './components/single-book/author-card/author-card.component';
import { PurchaseComponent } from './components/single-book/purchase/purchase.component';
import { AddCommentComponent } from './components/single-book/add-comment/add-comment.component';

// Books grid

import { BooksGridComponent } from './components/books-grid/books-grid.component';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { BookComponent } from './components/books-grid/book/book.component';

// Others

import { AppWelcomeComponent } from './components/app-welcome/app-welcome.component';
import { AppAboutComponent } from './components/app-about/app-about.component';

// Basket

import { BooksBasketComponent } from './components/books-basket/books-basket.component';
import { CommentsComponent } from './components/single-book/comments/comments.component';
import { CommentComponent } from './components/single-book/comments/comment/comment.component';
import { AppBasketComponent } from './components/app-basket/app-basket.component';


// Declarations

@NgModule({
  declarations: [
    AppComponent, TopNavComponent, AppGridComponent, scrollfixedNav,
    FixedNavComponent, TopMenuComponent, FooterMenuComponent, AppAboutComponent,
    TopTitleComponent, FooterNavComponent, AppWelcomeComponent, AdminBooksComponent,
    AdminAuthorsComponent, BookListComponent, AuthorListComponent, AddBookComponent,
    AddAuthorComponent, AppWelcomeComponent, BooksGridComponent, SingleBookComponent,
    BooksTableComponent,BookComponent, BookInfoComponent, AuthorCardComponent,
    PurchaseComponent, AddCommentComponent, BooksBasketComponent, CommentsComponent,
    CommentComponent, AdminCommentsComponent, CommentListComponent, AdminAddCommentComponent, AppBasketComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ToastrModule.forRoot({  // Apply to all Toastr
      timeOut: 3000,
      progressBar: true
    })
  ],
  providers: [BookService, AuthorService,
              BasketService, CommentService],
  bootstrap: [AppComponent]
})

export class AppModule { }
