import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = environment.APIurl;
  apiKey = environment.apikey;
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
  }

  getMovies(page, title){
    return this.http.get(`${this.apiUrl}?s=${title}&page=${page}&apikey=${this.apiKey}`);
  }
}
