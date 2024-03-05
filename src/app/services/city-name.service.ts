import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CityNameService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllCities(): Observable<any> {
    return this.http.get<any>( `./assets/city-name.json`);
  }

}

