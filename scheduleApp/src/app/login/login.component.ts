import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent {
  public email: string;
  public password: string;
  public error: string;
  admin = false;

  constructor(private auth: AuthService, private router: Router) { }

  public submit() {
    localStorage.setItem('Email', this.email);
    
    this.auth.login(this.email, this.password)
      .pipe(first())
      .subscribe(
        result => {
          
          
        if(localStorage.getItem("admin") == "1")
        {              
          this.router.navigate(['administrator'])
        }
        else{this.router.navigate(['secure-user'])}
          
      },
        err =>{
          if(err.status ==401){
            this.admin = true;
            this.error = 'This Account has been Suspended, Contact an Administrator: Admin@website.com'
          }else{
          this.error = 'Could not authenticate'
          }
        }
      );
  }
}
