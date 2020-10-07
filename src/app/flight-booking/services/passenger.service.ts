import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {Passenger} from '../../entities/passenger';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  passengers: Passenger[] = [];
  params: HttpParams;

  constructor(private http: HttpClient) {
  }

  index(): Observable<Passenger[]> {
    const url = './api/passenger';
   return this.http.get<Passenger[]>(url);
  }

  findByFirstname(firstName: string): Observable<Passenger[]> {
    const url = './api/passenger';
    const params = new HttpParams()
      .set('firstName', firstName);

    return this.http.get<Passenger[]>(url, {params});
  }

  findByName(name: string): Observable<Passenger[]> {
    const url = './api/passenger';
    
    
    if (typeof name.split(' ')[1] !== 'undefined') {
      const params = new HttpParams()
        .set('firstName', name.split(' ')[0])
        .set('name', name.split(' ')[1]);
    
      return this.http.get<Passenger[]>(url, {params});
    } else {
      const params = new HttpParams()
        .set('name', name);

      return this.http.get<Passenger[]>(url, {params});
    }
      
  }

  findByStatus(status: string): Observable<Passenger[]> {
    const url = './api/passenger';
    const params = new HttpParams()
      .set('passengerStatus', status);

    return this.http.get<Passenger[]>(url, {params});
  }

  findByNumber(number: string): Observable<Passenger[]> {
    const url = './api/passenger/' + number;

    return this.http.get<Passenger[]>(url);
  }
}
