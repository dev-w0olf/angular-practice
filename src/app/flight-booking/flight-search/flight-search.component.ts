import {Component, OnInit} from '@angular/core';
import {Flight} from '../../entities/flight';
import {FlightService} from '../services/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  toggleFlightFilter = false;
  flightSearch = 'Flight Search';
  message: string;
  from: string;
  to: string;
  selectedFlight: Flight;

  basket: object = {
  };

  constructor(private flightService: FlightService) {
  }

  get flights() {
    return this.flightService.flights;
  }

  ngOnInit(): void {
  }

  clearSelected(): void {
    this.selectedFlight = null;
  }

  search(): void {
    console.log('Search started!');

    this.flightService.filterState$.next({
      from: this.from,
      to: this.to
    });


    this.flightService
      .load(this.from, this.to);
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  save(): void {
    this.flightService.save(this.selectedFlight.id, this.selectedFlight )
      .subscribe(
        flight => {
          this.selectedFlight = flight;
          this.message = 'Update successful!';
        },
        errResponse => {
          this.message = 'Error on updating the Flight';
          console.error(this.message, errResponse);
        }
      );
  }

  create(): void {
    this.flightService.create(this.selectedFlight)
      .subscribe(
        flight => {
          this.selectedFlight = flight;
          this.message = 'Creation successful!';
        },
        errResponse => {
          this.message = 'Error on creating the Flight';
          console.error(this.message, errResponse);
        }
      );
  }
}
