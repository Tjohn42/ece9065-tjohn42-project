import { Component, ViewChild,ElementRef  } from '@angular/core';
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
          }
          else if(err.status == 403){
            this.admin = true;
            this.error = 'Please confirm your account with the mail that was sent!'
          }
          else{
          this.error = 'Could not authenticate'
          }
        }
      );
  }

  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  auth2:any;
 ngOnInit() {
    this.googleInitialize();
  }

  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '488489254485-k0umpsqlt7l9m9noc97vbd9tjpp2mpr9.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    }
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
}
