import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Flight} from "../../entities/flight";

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient) {
  }

  getLong(value: string): string {
    switch (value) {
      case 'Graz':
        return 'Flughafen Graz';
      case 'Hamburg':
        return 'Airport Hamburg Fulsbüttel Helmut Schmidt';
      case 'Wien':
        return 'Flughafen Wien Schwechat';
      case 'Berlin':
        return 'Flughafen Berlin Tempelhof';
      default:
        return value;
    }
  }

  getShort(value: string): string {
    switch (value) {
      case 'Graz':
        return 'GRZ';
      case 'Hamburg':
        return 'HAM';
      case 'Wien':
        return 'VIE';
      case 'Berlin':
        return 'BER';
      default:
        return value;
    }
  }

  getLongAsync(value: string): Observable<string> {

    const url = 'http://www.angular.at/api/airport/fullName';
    const params = new HttpParams()
      .set('name', value);


    return this.http
      .get<string>(url, {params});
  }

  getShortAsync(value: string): Observable<string> {

    const url = 'http://www.angular.at/api/airport/code';
    const params = new HttpParams()
      .set('name', value);

    return this.http
      .get<string>(url, {params});
  }

}
