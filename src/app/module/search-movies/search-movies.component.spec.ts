import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { SearchMoviesComponent } from './search-movies.component';
import {BrowserModule, By} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DebugElement} from '@angular/core';
import {TodoService} from '../../shared/service/todo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {MovieModel} from '../../shared/model/movie.model';

describe('SearchMoviesComponent', () => {
  let component: SearchMoviesComponent;
  let fixture: ComponentFixture<SearchMoviesComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SearchMoviesComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        TodoService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the search method', (() => {
    fixture.detectChanges();
    spyOn(component, 'search');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.search).toHaveBeenCalledTimes(1);
  }));

  it('Test component variables', (() => {
    const displayColumn = ['imdbID', 'Title', 'Type', 'Year', 'Poster'];
    expect(component.displayColumn).toEqual(displayColumn);
    expect(component.displayColumn.length).toEqual(displayColumn.length);
    expect(component.count).toEqual(0);
    expect(component.page).toEqual(1);
    expect(component.movieModel).toBeUndefined();
    expect(component.errorMessage).toBeUndefined();
    expect(component.searchMovie).toBe('');
  }));
});
