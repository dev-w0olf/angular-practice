import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {Passenger} from '../../entities/passenger';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  passengers: Passenger[] = [];
  filterState$ = new BehaviorSubject<{ from: string, to: string }>({
    from: '',
    to: ''
  });

  constructor(private http: HttpClient) {
  }

  index(): Observable<Passenger[]> {
   return this.http.get<Passenger[]>('http://localhost:3000/passenger');
  }

  // find(from: string, to: string): Observable<Flight[]> {
  //   console.log('Search started!');
  //   const url = './api/flight';

  //   const params = new HttpParams()
  //     .set('from', from)
  //     .set('to', to);

  //   return this.http
  //     .get<Flight[]>(url, {params});

  // }

  // save(id: number, flight: Flight): Observable<Flight> {

  //   const url = './api/flight/';

  //   const headers = new HttpHeaders()
  //     .set('Accept', 'application/json');

  //   return this.http
  //     .put<Flight>(url + id, flight, {headers});
  // }

  // create(flight: Flight): Observable<Flight> {

  //   const url = './api/flight';

  //   const headers = new HttpHeaders()
  //     .set('Accept', 'application/json');

  //   return this.http
  //     .post<Flight>(url, flight, {headers});
  // }

  // findById(id: number): Observable<Flight> {

  //   const url = './api/flight/' + id;
  //   return this.http.get<Flight>(url);
  // }
}
