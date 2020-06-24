import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesiteComponent } from './homesite.component';

describe('HomesiteComponent', () => {
  let component: HomesiteComponent;
  let fixture: ComponentFixture<HomesiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
