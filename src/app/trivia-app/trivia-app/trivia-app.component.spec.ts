import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaAppComponent } from './trivia-app.component';

describe('TriviaAppComponent', () => {
  let component: TriviaAppComponent;
  let fixture: ComponentFixture<TriviaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
