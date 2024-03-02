import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityRateService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRatesByCustomer(customerId: any): Observable<RateListResponse> {
    return this.http.get<RateListResponse>(`${this.apiUrl}Rate?customerId=${customerId}`);
  }

  getRateById(id: number): Observable<RateListResponse> {
    return this.http.get<RateListResponse>(`${this.apiUrl}Rate/${id}`);
  }

  addUpdateRate(data: Rates): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}Rate`, data);
  }

  deleteRateById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}Rate/${id}`);
  }
}

export interface RateListResponse {
  rates?: Rates[];
}

export interface Rates {
  rateId?: number | null;
  customerId?: number;
  transportationMode?: string;
  city?: string;
  minWeight?: number;
  ratePerKg?: number;
  ratePerPiece?: number;
}
