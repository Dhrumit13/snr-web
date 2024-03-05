import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<CustomerListResponse> {
    return this.http.get<CustomerListResponse>(`${this.apiUrl}api/Customer`);
  }

  getCustomerById(id: number): Observable<CustomerListResponse> {
    return this.http.get<CustomerListResponse>(`${this.apiUrl}api/Customer/${id}`);
  }

  addUpdateCustomer(data: Customer): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}api/Customer`, data);
  }

  deleteCustomerById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}api/Customer/${id}`);
  }
}

export interface CustomerListResponse {
  customers?: Customer[];
}

export interface Customer {
  customerId?: number;
  name?: string;
  email?: string;
  mobile?: string;
  gstNo?: string;
  address?: string;
  city?: string;
  state?: string;
}
