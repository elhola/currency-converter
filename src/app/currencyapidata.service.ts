import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyResponse } from './currency-response';

@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {
  constructor(private http: HttpClient) { }

  getcurrencydata(country1: string): Observable<CurrencyResponse> {
    let url = 'https://api.exchangerate.host/latest?base=' + country1;
    return this.http.get<CurrencyResponse>(url);
  }
}
