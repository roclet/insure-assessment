import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';;
import {TodoService} from './shared/service/todo.service';
import {BasicAuthInterceptor} from './shared/service/basic-auth.interceptor';
import {metaReducers, reducers} from './module/task/reducers';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './module/task/effects';
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
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgxPaginationModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
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
