import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntaskComponent } from './intask.component';

describe('IntaskComponent', () => {
  let component: IntaskComponent;
  let fixture: ComponentFixture<IntaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
