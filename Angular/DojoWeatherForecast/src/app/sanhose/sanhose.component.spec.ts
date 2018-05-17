import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanhoseComponent } from './sanhose.component';

describe('SanhoseComponent', () => {
  let component: SanhoseComponent;
  let fixture: ComponentFixture<SanhoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanhoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanhoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
