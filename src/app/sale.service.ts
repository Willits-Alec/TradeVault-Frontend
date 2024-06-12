import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSales(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sales`);
  }

  addSale(sale: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sales`, sale);
  }

  updateSale(id: string, sale: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/sales/${id}`, sale);
  }

  deleteSale(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/sales/${id}`);
  }
}
