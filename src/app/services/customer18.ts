import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Customer18Service {
  private jsonUrl = 'assets/data/customers18.json';

  constructor(private http: HttpClient) {}

  getGroupedCustomers18(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}