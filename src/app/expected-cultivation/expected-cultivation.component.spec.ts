import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectedCultivationComponent } from './expected-cultivation.component';

describe('ExpectedCultivationComponent', () => {
  let component: ExpectedCultivationComponent;
  let fixture: ComponentFixture<ExpectedCultivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpectedCultivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpectedCultivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
