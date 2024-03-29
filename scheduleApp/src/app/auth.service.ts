import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {  
    return this.http.post<{token: string}>('/api/auth', {email: email, password: password})
      .pipe(
        map(result => {     
          console.log("here");
             
          localStorage.setItem('access_token', result.token);
          //@ts-ignore
          localStorage.setItem('username', result.user);
          //@ts-ignore
          if(result.admin == 1){
            //@ts-ignore
            localStorage.setItem('admin', result.admin);
          }else{localStorage.setItem('admin', "0");}
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