import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastIconComponent } from './forecast-icon.component';

describe('ForecastIconComponent', () => {
  let component: ForecastIconComponent;
  let fixture: ComponentFixture<ForecastIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
