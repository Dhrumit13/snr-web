import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../../customers/service/customers.service';
import { Receiver } from '../../receivers/services/receivers.service';
import { OtherCharge } from '../../other-charges/services/other-charges.service';

@Injectable({
  providedIn: 'root'
})
export class ConsignmentService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllConsignments(): Observable<ConsignmentListResponse> {
    return this.http.get<ConsignmentListResponse>(`${this.apiUrl}api/Consignment`);
  }

  getConsignmentById(id: number): Observable<ConsignmentListResponse> {
    return this.http.get<ConsignmentListResponse>(`${this.apiUrl}api/Consignment/${id}`);
  }

  addUpdateConsignment(data: Consignment): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}api/Consignment`, data);
  }

  deleteConsignmentById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}api/Consignment/${id}`);
  }
}

export interface ConsignmentListResponse {
  consignments?: Consignment[];
}

export interface Consignment {
    date: Date,
    customer: Customer,
    receiver: Receiver
    origin: string,
    destination: string,
    weight: number,
    quantity: number,
    grossAmount: number,
    packageType: string,
    paymentMode: string,
    otherCharges?: OtherChargesList[],
    netAmount: number,
    remarks?: string
}

export interface OtherChargesList {
    chargeType: OtherCharge,
    value: number
}
