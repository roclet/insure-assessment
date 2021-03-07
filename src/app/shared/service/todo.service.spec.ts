import { TestBed , inject} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        TodoService
      ]
    });
    service = TestBed.inject(TodoService);
    httpMock = TestBed.get(HttpTestingController);
    });
  it ('should fetch posts as an Observable', (inject([HttpTestingController, TodoService],
    (httpClient: HttpTestingController, postService: TodoService) => {
      const postItem = [
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
          Title: "Batman Begins",
          Type: "movie",
          Year: "2005",
          imdbID: "tt0372784",
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
          Title: "Batman v Superman: Dawn of Justice",
          Type: "movie",
          Year: "2016",
          imdbID: "tt2975590"
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
          Title: "Batman",
          Type: "movie",
          Year: "1989",
          imdbID: "tt0096895"
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
          Title: "Batman Returns",
          Type: "movie",
          Year: "1992",
          imdbID: "tt0103776"
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          Title: "Batman Forever",
          Type: "movie",
          Year: "1995",
          imdbID: "tt0112462"
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
          Title: "The Lego Batman Movie",
          Type: "movie",
          Year: "2017",
          imdbID: "tt4116284"
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
          Title: "Batman: The Animated Series",
          Type: "series",
          Year: "1992–1995",
          imdbID: "tt0103359"
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
          Title: "Batman: Under the Red Hood",
          Type: "movie",
          Year: "2010",
          imdbID: "tt1569923"
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg",
          Title: "Batman: The Dark Knight Returns, Part 1",
          Type: "movie",
          Year: "2012",
          imdbID: "tt2313197"
        },
        {
          Poster: "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg",
          Title: "Batman: The Dark Knight Returns, Part 1",
          Type: "movie",
          Year: "2012",
          imdbID: "tt2313197"
        }
      ];
      const page = 1;
      const title = 'Batman';
      postService.getMovies(page, title)
        .subscribe((posts: any) => {
          expect(posts.length).toBe(10);
      });
      const req = httpMock.expectOne('http://omdbapi.com/?s=Batman&page=1&apikey=d7380236');
      expect(req.request.method).toBe("GET");
      req.flush(postItem);
      httpMock.verify();
  })));
});
