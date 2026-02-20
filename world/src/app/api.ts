import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})

export class API {
  constructor(private http: HttpClient) {}

  getData(countryId: string): Observable<any> {
    return this.http.get("https://api.worldbank.org/v2/country/{au}?format=json");
  }
}
