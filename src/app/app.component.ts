import { Component } from '@angular/core';
import { Router, NavigationError, NavigationEnd, NavigationStart } from '@angular/router';
import {TodoService} from './shared/service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-UI';
  constructor(private taskervice: TodoService, private router: Router){}
}
