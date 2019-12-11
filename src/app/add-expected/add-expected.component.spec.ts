import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpectedComponent } from './add-expected.component';

describe('AddExpectedComponent', () => {
  let component: AddExpectedComponent;
  let fixture: ComponentFixture<AddExpectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
