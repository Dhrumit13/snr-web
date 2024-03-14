import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OtherChargesService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllCharges(): Observable<ChargeListResponse> {
    return this.http.get<ChargeListResponse>(`${this.apiUrl}api/OtherCharges`);
  }

  getChargeById(id: number): Observable<ChargeListResponse> {
    return this.http.get<ChargeListResponse>(`${this.apiUrl}api/OtherCharges?OtherChargesId=${id}`);
  }

  addUpdateCharge(data: OtherCharge): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}api/OtherCharges`, data);
  }

  deleteChargeById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}api/OtherCharges/${id}`);
  }
}

export interface ChargeListResponse {
  otherChargess?: OtherCharge[];
}

export interface OtherCharge {
  otherChargeId?: number;
  otherChargeName?: string;
  amount?: number;
}
