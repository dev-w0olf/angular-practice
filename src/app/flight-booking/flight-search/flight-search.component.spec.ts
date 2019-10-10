import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {FlightSearchComponent} from './flight-search.component';
import {SharedModule} from '../../shared/shared.module';
import {By} from '@angular/platform-browser';
import {Observable, of} from 'rxjs';
import {Flight} from '../../entities/flight';
import {FormsModule} from '@angular/forms';
import {FlightService} from '../services/flight.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FlightBookingModule} from '../flight-booking.module';

describe('Unit test with service mock: flight-search.component', () => {
  // tslint:disable-next-line:no-shadowed-variable
  let component: FlightSearchComponent;
  // tslint:disable-next-line:no-shadowed-variable
  let fixture: ComponentFixture<FlightSearchComponent>;
  const result = [
    {id: 17, from: 'Graz', to: 'Hamburg', date: 'now', delayed: true},
    {id: 18, from: 'Vienna', to: 'Barcelona', date: 'now', delayed: true},
    {id: 19, from: 'Frankfurt', to: 'Salzburg', date: 'now', delayed: true},
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        SharedModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FlightBookingModule
      ],
      declarations: []
    })
      .overrideComponent(FlightSearchComponent, {
        set: {
          providers: [
            {
              provide: FlightService,
              useValue: flightServiceMock
            }
          ]
        }
      })
      .compileComponents();

    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  const flightServiceMock = {
    find(from: string, to: string): Observable<Flight[]> {
      return of(result);
    },
    // Do implement the following members only if this code is used in your Component
    flights: [],
    load(from: string, to: string): void {
      this.find(from, to).subscribe(f => {
        this.flights = f;
      });
    },
    filterState$: {
      next: (anyname: { from: string, to: string }) => {
      }
    }
  };


  it('should not have any flights loaded initially', () => {
    expect(component.flights.length).toBe(0);
  });
  it('should have a disabled search-button w/o params', fakeAsync(() => {
    tick();
    const from = fixture
      .debugElement
      .query(By.css('input[name=from]'))
      .nativeElement;

    from.value = '';
    from.dispatchEvent(new Event('input'));

    const to = fixture
      .debugElement
      .query(By.css('input[name=to]'))
      .nativeElement;

    to.value = '';
    to.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    tick();

    const disabled = fixture
      .debugElement
      .query(By.css('button'))
      .properties['disabled'];

    expect(disabled).toBeTruthy();


  }));

  it('should not load flights w/o from and to', () => {
    component.from = '';
    component.to = '';
    component.search();

    expect(component.flights.length).toBe(0);
  });

  it('should load flights w/ from and to', () => {
    component.from = 'Hamburg';
    component.to = 'Graz';
    component.search();

    expect(component.flights.length).toBeGreaterThan(0);
  });
});
