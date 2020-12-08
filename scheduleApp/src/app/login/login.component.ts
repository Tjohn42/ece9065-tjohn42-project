import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public email: string;
  public password: string;
  public error: string;

  constructor(private auth: AuthService, private router: Router) { }

  public submit() {
    console.log(this.email, this.password);
    
    this.auth.login(this.email, this.password)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['secure-user']),
        err => this.error = 'Could not authenticate'
      );
  }
}
