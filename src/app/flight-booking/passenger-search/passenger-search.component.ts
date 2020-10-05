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

  constructor(private passengerService: PassengerService) { }

  ngOnInit() {
    this.passengerService.index().subscribe(passengers => {
      this.passengers = passengers;
    });
  }
}
