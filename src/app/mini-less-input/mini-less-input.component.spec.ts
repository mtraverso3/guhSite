import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniLessInputComponent } from './mini-less-input.component';

describe('MiniLessInputComponent', () => {
  let component: MiniLessInputComponent;
  let fixture: ComponentFixture<MiniLessInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniLessInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniLessInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
