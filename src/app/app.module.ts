import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TodoService} from './shared/service/todo.service';
import {BasicAuthInterceptor} from './shared/service/basic-auth.interceptor';
import { SearchMoviesComponent } from './module/search-movies/search-movies.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import {LoaderInterceptor} from './shared/service/loaderInterceptor.service';
import { LoaderComponent } from './module/loader/loader.component';
import {LoaderService} from './shared/service/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchMoviesComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],
  providers: [
    TodoService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
