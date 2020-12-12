import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {  
    return this.http.post<{token: string}>('http://localhost:5000/api/auth', {email: email, password: password})
      .pipe(
        map(result => {        
          localStorage.setItem('access_token', result.token);
          localStorage.setItem('username', result.user);
          if(result.admin){
            localStorage.setItem('admin', result.admin);
          }
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}