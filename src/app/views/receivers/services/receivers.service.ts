import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReceiversService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllReceivers(): Observable<ReceiverListResponse> {
    return this.http.get<ReceiverListResponse>(`${this.apiUrl}api/Receiver`);
  }

  getReceiverById(id: number): Observable<ReceiverListResponse> {
    return this.http.get<ReceiverListResponse>(`${this.apiUrl}api/Receiver/${id}`);
  }

  addUpdateReceiver(data: Receiver): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}api/Receiver`, data);
  }

  deleteReceiverById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}api/Receiver/${id}`);
  }
}

export interface ReceiverListResponse {
  receivers?: Receiver[];
}

export interface Receiver {
  receiverId?: number;
  receiverName?: string;
  city?: string;
  address?: string;
  email?: string;
  mobile?: string;
  isActive?: boolean;
}
