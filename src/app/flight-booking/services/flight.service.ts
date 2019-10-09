import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Flight} from '../../entities/flight';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flights: Flight[] = [];

  constructor(private http: HttpClient) {
  }

  load(from: string, to: string): void {
   this.find(from, to).subscribe(
      flights => {
        this.flights = flights;
        console.log('Fetched ' + this.flights.length + ' flight(s)');
      },
      err => {
        console.error('Error loading flights', err);
      }
    );
  }

  find(from: string, to: string): Observable<Flight[]> {
    console.log('Search started!');
    const url = './api/flight';

    const params = new HttpParams()
      .set('from', from)
    if (to) {
      params.set('to', to);
    }

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http
      .get<Flight[]>(url, {params, headers});

  }

  save(id: number, flight: Flight): Observable<Flight> {

    const url = './api/flight/';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http
      .put<Flight>(url + id, flight, {headers});
  }

  create(flight: Flight): Observable<Flight> {

    const url = './api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http
      .post<Flight>(url, flight, {headers});
  }
}
