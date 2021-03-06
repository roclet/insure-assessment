import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppState, getAllItems, getTaskState} from '../../module/task/reducers';
import {Store} from '@ngrx/store';
import * as TaskActions from '../../module/task/action/tasks.action';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = environment.APIurl;
  apiKey = environment.apikey;
  headers: HttpHeaders;
  constructor(private store: Store<AppState>, private http: HttpClient) {
  }

  getMovies(){
    const title = 'Batman';
    return this.http.get(`${this.apiUrl}?s=${title}&apikey=${this.apiKey}`);
  }

  load() {
    this.store.dispatch(new TaskActions.LoadTaskBegin());
  }
  getData() {
    return this.store.select(getTaskState);
  }

  getItems() {
    return this.store.select(getAllItems);
  }
}
