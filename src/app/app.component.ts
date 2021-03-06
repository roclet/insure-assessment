import { Component } from '@angular/core';
import { Router, NavigationError, NavigationEnd, NavigationStart } from '@angular/router';
import {TodoService} from './shared/service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private taskervice: TodoService, private router: Router){
    this.taskervice.load();
    this.getMovies();
  }

  getMovies() {
    this.taskervice.getMovies().subscribe((data) => {
      console.log(data);
    });
  }
}