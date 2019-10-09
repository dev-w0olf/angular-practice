import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FlightService} from "../flight-booking/services/flight.service";

@Component({
  // tslint:disable-next-line:component-selector
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private flightService: FlightService) {}
  filter$: Observable<{ from: string, to: string}>;

    private sidebarVisible = false;

  ngOnInit(): void {
    this.filter$ = this.flightService.filterState$;
  }

    sidebarToggle(){
        const body = document.getElementsByTagName('body')[0];

        if (this.sidebarVisible === false) {
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}
