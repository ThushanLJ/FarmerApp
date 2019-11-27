import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureCultivationComponent } from './future-cultivation.component';

describe('FutureCultivationComponent', () => {
  let component: FutureCultivationComponent;
  let fixture: ComponentFixture<FutureCultivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureCultivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureCultivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
