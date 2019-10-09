import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightReactiveComponent } from './flight-reactive.component';

describe('FlightReactiveComponent', () => {
  let component: FlightReactiveComponent;
  let fixture: ComponentFixture<FlightReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
