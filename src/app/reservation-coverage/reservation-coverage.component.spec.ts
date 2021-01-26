import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCoverageComponent } from './reservation-coverage.component';

describe('ReservationCoverageComponent', () => {
  let component: ReservationCoverageComponent;
  let fixture: ComponentFixture<ReservationCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationCoverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
