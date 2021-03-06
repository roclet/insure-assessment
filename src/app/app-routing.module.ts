import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchMoviesComponent} from './module/search-movies/search-movies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: SearchMoviesComponent,
    data: {
      isLogin: false
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
