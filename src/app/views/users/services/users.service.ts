import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<UserListResponse> {
    return this.http.get<UserListResponse>(`${this.apiUrl}api/User`);
  }

  getUserById(id: number): Observable<UserListResponse> {
    return this.http.get<UserListResponse>(`${this.apiUrl}api/User/${id}`);
  }

  addUpdateUser(data: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}api/User`, data);
  }

  deleteUserById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}api/User/${id}`);
  }
}


export interface UserListResponse {
  users?: User[];
}

export interface User {
  userId?: number;
  username?: string;
  password?: string;
  email?: string;
  mobile?: string;
  role?: string;
  createdDate?: string;
  isDeleted?: string;
}
