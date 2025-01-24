import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  // private baseUrl = 'http://lmsbackend.atwebpages.com/api/';

  // constructor(private http: HttpClient) {}

  // registerUser(data: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}auth/register`, data);
  // }
}
