import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaSectionComponent } from './trivia-section.component';

describe('TriviaSectionComponent', () => {
  let component: TriviaSectionComponent;
  let fixture: ComponentFixture<TriviaSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
