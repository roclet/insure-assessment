import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {LoaderComponent} from './module/loader/loader.component';
import {LoaderService} from './shared/service/loader.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoaderComponent
      ],
      providers: [
        LoaderService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Todo-UI'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Todo-UI');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content h2').textContent).toContain('Welcome');
    expect(compiled.querySelector('.content p').textContent).toContain('Search Movie');
  });
});
