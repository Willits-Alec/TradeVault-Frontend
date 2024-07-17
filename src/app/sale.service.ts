// sale service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';
import { Sale } from './sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.apiUrl}/sales`);
  }

  getSale(id: string): Observable<Sale> {
    return this.http.get<Sale>(`${this.apiUrl}/sales/${id}`);
  }

  searchSales(itemName: string): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.apiUrl}/sales/search?itemName=${itemName}`);
  }
  

  addSale(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(`${this.apiUrl}/sales`, sale);
  }

  updateSale(id: string, sale: Sale): Observable<Sale> {
    return this.http.put<Sale>(`${this.apiUrl}/sales/${id}`, sale);
  }

  deleteSale(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/sales/${id}`);
  }
}





