import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../shared/service/todo.service';
import {Router} from '@angular/router';
import {MovieModel} from '../../shared/model/movie.model';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  displayColumn = ['imdbID', 'Title', 'Type', 'Year', 'Poster'];
  errorMessage: string;
  movieModel: MovieModel[];
  page = 1;
  count = 0;
  tableSize = 10;
  searchMovie: string = '';
  constructor(private taskervice: TodoService, private router: Router) { }

  ngOnInit(): void {}

  search(){
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', this.searchMovie);
    this.getMovies();
  }

  getMovies() {
    this.taskervice.getMovies(this.page, this.searchMovie)
       .subscribe(
         data => this.extraData(data),
         error => this.errorMessage = <any> error
      );
  }

  extraData(data){
    const searchResult = JSON.parse(JSON.stringify(data));
    if (searchResult.Response) {
      this.movieModel = searchResult.Search;
      this.count = Number(searchResult.totalResults);
    }
  }

  onTableDataChange(event){
    this.page = event;
    this.getMovies();
  }

  // onTableSizeChange(event): void { Batman
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  //   this.getMovies();
  // }
}
