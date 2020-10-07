import { Component, OnInit } from '@angular/core';
import {Passenger} from '../../entities/passenger';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css']
})
export class PassengerSearchComponent implements OnInit {
  passengers: Passenger[] = [];
  infos: string;

  constructor(private passengerService: PassengerService) { }

  ngOnInit() {
    this.viewAll();
  }

  search() {
    if (!this.infos) {
      return;
    }

    this.passengers = [];
    this.passengerService.findByFirstname(this.infos).subscribe(passengers => {
      this.passengers = this.passengers.concat(passengers);
    });
    this.passengerService.findByName(this.infos).subscribe(passengers => {
      this.passengers = this.passengers.concat(passengers);
    });
    this.passengerService.findByStatus(this.infos).subscribe(passengers => {
      this.passengers = this.passengers.concat(passengers);
    });
    this.passengerService.findByNumber(this.infos).subscribe(passengers => {
      this.passengers = this.passengers.concat(passengers);
    });
  }

  viewAll() {
    this.passengerService.index().subscribe(passengers => {
      this.passengers = passengers;
    });
  }
}
