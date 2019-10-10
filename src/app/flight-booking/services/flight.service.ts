import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {Flight} from '../../entities/flight';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flights: Flight[] = [];
  filterState$ = new BehaviorSubject<{ from: string, to: string }>({
    from: '',
    to: ''
  });

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
    const url = 'http://localhost:3000/flight/';

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    return this.http
      .get<Flight[]>(url, {params});

  }

  save(id: number, flight: Flight): Observable<Flight> {

    const url = 'http://localhost:3000/flight/';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http
      .put<Flight>(url + id, flight, {headers});
  }

  create(flight: Flight): Observable<Flight> {

    const url = 'http://localhost:3000/flight/';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http
      .post<Flight>(url, flight, {headers});
  }

  findById(id: number): Observable<Flight> {

    const url = 'http://localhost:3000/flight/' + id;
    return this.http.get<Flight>(url);
  }
}
