import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://lmsbackend.atwebpages.com/api/auth/login';

  constructor(private http: HttpClient) {}

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { email, password });
  }
}
